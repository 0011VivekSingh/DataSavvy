import React, { useEffect, useState } from 'react';
import app_config from '../../config';
import { useSheetContext } from '../../context/SheetProvider';

const ExcelSheet = () => {
  const [sheet, setSheet] = useState(window.luckysheet);
  const { toolpack } = app_config;
  const { selTool, setSelTool } = useSheetContext();
  const [selInput, setSelInput] = useState(null);

  const [currentInputs, setCurrentInputs] = useState([]);

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
        <button className='btn btn-primary' onClick={calculateResult}>Calculate</button>
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
  top: '0px'
  //   zIndex: "-1",
};

export default ExcelSheet;
