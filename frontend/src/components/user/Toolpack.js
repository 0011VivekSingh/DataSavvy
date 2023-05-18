import React, { useRef, useState } from "react";
import { HotTable } from "@handsontable/react";
import { HyperFormula } from "hyperformula";
import ReactModal from 'react-modal-resizable-draggable';
import Toolbar from "./Toolbar";

const Toolpack = () => {
  const sheetData = Array.from({ length: 100 }, () => new Array(100).fill(null));
  const [allowFilters, setAllowFilters] = useState(true);
  const [showRowHeaders, setShowRowHeaders] = useState(true);
  const [showColumnHeaders, setShowColumnHeaders] = useState(true);
  const [customBorders, setCustomBorders] = useState(true);
  const [showDropDownMenu, setShowDropDownMenu] = useState(true);
  const [enableMultiColumnSorting, setEnableMultiColumnSorting] = useState(true);
  const [enableManualRowMove, setEnableManualRowMove] = useState(true);

  const [rangeInput, setRangeInput] = useState('');
  const rangeInp = useRef(null);


  const data1 = [
    ["10.26", null, "Sum", "=SUM(A:A)"],
    ["20.12", null, "Average", "=AVERAGE(A:A)"],
    ["30.01", null, "Median", "=MEDIAN(A:A)"],
    ["40.29", null, "MAX", "=MAX(A:A)"],
    ["50.18", null, "MIN", "=MIN(A1:A5)"],
  ];
  const data2 = [
    ["Is A1 in Sheet1 > 10?", '=IF(Sheet1!A1>10,"TRUE","FALSE")'],
    ["Is A:A in Sheet > 150?", '=IF(SUM(Sheet1!A:A)>150,"TRUE","FALSE")'],
    ["How many blank cells are in the Sheet1?", "=COUNTBLANK(Sheet1!A1:D5)"],
    ["Generate a random number", "=RAND()"],
    ["Number of sheets in this workbook", "=SHEETS()"],
  ];
  //  create an external HyperFormula instance
  const hyperformulaInstance = HyperFormula.buildEmpty({
    // to use an external HyperFormula instance,
    // initialize it with the `'internal-use-in-handsontable'` license key
    licenseKey: "internal-use-in-handsontable",
  });


  const [modalOpen, setModalOpen] = useState(false);

  const sheetRef = useRef(null);

  const getSelectedSheetData = () => {
    const sheet = sheetRef.current.hotInstance;
    const data = sheet.getData(1, 1, 3, 3); // get data from range (1,1) to (3,3)
    console.log(data);
    return;
    const selected = sheet.getSelectedRange();
    console.log(selected);
    return;
    // const data = sheet.getData(selected[0], selected[1], selected[2], selected[3]);
    // console.log(data);
  }


  function columnToNumber(colName) {
    let result = 0;
    for (let i = 0; i < colName.length; i++) {
      const char = colName.charCodeAt(i) - 64;
      result = result * 26 + char;
    }
    console.log(result);
    return result;
  }

  const convertExcelRange = (range) => {
    const startCol = columnToNumber(range.charAt(0))-1;
    const startRow = parseInt(range.charAt(1), 10) - 1; // subtract 1 to account for 0-based indexing
    const endCol = columnToNumber(range.charAt(3))-1;
    const endRow = parseInt(range.charAt(4), 10) - 1;
    console.log(startCol, startRow, endCol, endRow);

    return [startRow, startCol, endRow, endCol];
  }

  const calculateMean = (numArray) => {
    let sum = 0;
    numArray.forEach(num => sum += num);
    // console.log(sum / numArray.length);
    return sum / numArray.length;
  }

  const calculateVariance = (numArray) => {
    let mean = calculateMean(numArray);
    let sum = 0;
    numArray.forEach(num => sum += Math.pow(num - mean, 2));
    // console.log(sum / numArray.length);
    return sum / numArray.length;
  }

  const performCalculation = (calcFunc, range) => {
    const sheet = sheetRef.current.hotInstance;
    const coords = convertExcelRange(rangeInp.current.value);
    const data = sheet.getData(coords[0], coords[1], coords[2], coords[3]);
    console.log(coords);
    console.log(data);
    const res = calcFunc(data.flat());
    console.log(res);
  }

  return (
    <>
      <Toolbar />
      <h3 className="demo-preview">Sheet 1</h3>
      <button className="btn btn-dark" onClick={getSelectedSheetData}>Get selection</button>
      <button className="btn btn-primary" onClick={e => setModalOpen(true)}>Mean</button>
      <ReactModal
        initWidth={700}
        initHeight={300}
        onFocus={() => console.log("Modal is clicked")}
        className={"my-modal-custom-class"}
        onRequestClose={e => setModalOpen(false)}
        isOpen={modalOpen}>
        <h3>My Modal</h3>

        <div className="body">
          <div className="card-body">
            <input className="form-control" ref={ rangeInp } />
            <button className="btn btn-primary" onClick={e => performCalculation(calculateVariance)}>
              Calculate Mean
            </button>
          </div>
        </div>


        <button onClick={e => setModalOpen(false)}>
          Close modal
        </button>
      </ReactModal>
      <HotTable
        ref={sheetRef}
        contextMenu={true}
        data={sheetData}
        colHeaders={showColumnHeaders}
        rowHeaders={showRowHeaders}
        filters={allowFilters}
        height="auto"
        formulas={{
          engine: hyperformulaInstance,
          sheetName: "Sheet1",
        }}
        

        licenseKey="non-commercial-and-evaluation"
      />
    </>
  );
};

export default Toolpack;

