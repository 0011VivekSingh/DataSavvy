import React, { useEffect, useState } from 'react';
import app_config from '../../config';
import { useSheetContext } from '../../context/SheetProvider';

const ExcelSheet = () => {
  const [sheet, setSheet] = useState(window.luckysheet);
  const { toolpack } = app_config;
  const { selTool, setSelTool } = useSheetContext();
  const [selInput, setSelInput] = useState(null);

  const [currentInputs, setCurrentInputs] = useState([]);
  const [outputRange, setOutputRange] = useState('');

  useEffect(() => {
    sheet.create({
      container: 'sheet'
      //   plugins: ["chart"],
    });
    setSheet(sheet);
  }, []);

  useEffect(() => {
    // console.log(selTool);
    if (selTool !== null) {
      console.log(selTool.inputs);
      setCurrentInputs(selTool.inputs);
    }
  }, [selTool]);

  const convertToExcelRange = (range) => {
    console.log(range);
    const { row, column } = range[0];
    console.log(row, column);
    return `${column[0]}${row[0]}:${column[1]}${row[1]}`;
  };

  const getSelectedRangeData = () => {
    const data = window.luckysheet.getRangeArray('twoDimensional');
    const range = window.luckysheet.getRange();
    console.log(data);
    convertToExcelRange(range);
    console.log(data.flat());
    updateInputValue(selInput, data.flat());
  };

  const updateInputValue = (index, value) => {
    const newInputs = [...currentInputs];
    newInputs[index].value = value;
    setCurrentInputs(newInputs);
  };

  const calculateResult = () => {
      const res = selTool.calc(currentInputs[selInput].value);
      console.log(res);
      showOutputInSheet(res);
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

  const showOutputInSheet = (excelRange, result) => {
    console.log(outputRange);
    const rowCol = convertExcelRange(outputRange);
    console.log(rowCol);
    window.luckysheet.setCellValue(0, 9, 7, 'sdsdsds');
  }

  const showToolBox = () => {
    return (
      <>
        {selTool.inputs.map((input, index) => (
          <>
            <button onClick={getSelectedRangeData}>get data</button>
            <label htmlFor={input.name}>{input.name}</label>
            <input className="form-control mb-3" onClick={(e) => setSelInput(index)} onChange={(e) => updateInputValue(index, e.target.value)} />
            { currentInputs[index] && currentInputs[index].value }
          </>
        ))}
        {/* <span>Output Range : </span> */}
        <input className='form-control' placeholder='Output Range' value={outputRange} onChange={e => setOutputRange(e.target.value)} />
        <button className='btn btn-primary mt-3' onClick={calculateResult}>Calculate</button>
      </>
    );
  };

  // window.addEventListener("mousemove", () => {
  //   const arr = window.luckysheet.getRangeArray('twoDimensional');
  //   console.log(arr);
  // });

  return (
    <div>
      <div className="row">
        <div id="sheet" style={luckyCss}></div>
        <div className="tool-box" style={toolboxCss}>
          <div className="card mt-5">
            <div className="card-header">
              <h4>Toolbox</h4>
              {selTool && showToolBox()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const luckyCss = {
  margin: '0px',
  padding: '0px',
  position: 'absolute',
  width: '70%',
  height: '100%',
  left: '0px',
  top: '65px'
  //   zIndex: "-1",
};

const toolboxCss = {
  margin: '0px',
  padding: '0px',
  position: 'absolute',
  width: '30%',
  height: '100%',
  right: '0px',
  top: '65px'
  //   zIndex: "-1",
};

export default ExcelSheet;
