import React, { useEffect, useState } from 'react';
import app_config from '../../config';
import { useSheetContext } from '../../context/SheetProvider';
import { convertCellNotationToIndexes } from './utils';

const ExcelSheet = () => {
  const [sheet, setSheet] = useState(window.luckysheet);
  const { toolpack, apiUrl } = app_config;
  const { selTool, setSelTool } = useSheetContext();
  const [selInput, setSelInput] = useState(null);

  // const [tools, setTools] = useState([...toolpack]);

  const [currentInputs, setCurrentInputs] = useState([]);
  const [outputRange, setOutputRange] = useState('');

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  // const fetchTools = async () => {
  //   try {
  //     const response = await fetch(`${apiUrl}/tool/getbyuser/${currentUser._id}`);
  //     const data = await response.json();
  //     console.log(data);
  //     setTools(...tools, data);
  //     // setToolList(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  useEffect(() => {
    // fetchTools();
    sheet.create({
      container: 'sheet',
      title: 'My WorkBook'
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
    // const range = window.luckysheet.getRange();
    // console.log(data);
    // convertToExcelRange(range);
    return data.flat();
    // console.log(data.flat());
    // updateInputValue(selInput, data.flat());
  };

  const updateInputValue = (index, value) => {
    const newInputs = [...currentInputs];
    newInputs[index].value = value;
    setCurrentInputs(newInputs);
    console.log(newInputs);
  };

  const calculateResult = () => {

    console.log(currentInputs);
    // return;
    // const values = getSelectedRangeData();
    // console.log(values);
    const res = selTool.calc(currentInputs);
    // res will contain array of results
    console.log(res);
    showOutputInSheet(res);
  };

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
    const startCol = columnToNumber(range.charAt(0)) - 1;
    const startRow = parseInt(range.charAt(1), 10) - 1; // subtract 1 to account for 0-based indexing
    const endCol = columnToNumber(range.charAt(3)) - 1;
    const endRow = parseInt(range.charAt(4), 10) - 1;
    console.log(startCol, startRow, endCol, endRow);
    return [startRow, startCol, endRow, endCol];
  };

  const showOutputInSheet = (results) => {
    console.log(outputRange);
    // const rowCol = convertExcelRange(outputRange);
    // console.log(rowCol);
    // let startCell = [rowCol[0], rowCol[1]];
    let { row, column } = convertCellNotationToIndexes(outputRange);
    console.log(row, column);
    results.forEach((result, index) => {
      console.log(selTool.outputFormat[index]);
      window.luckysheet.setCellValue(row + index, column, selTool.outputFormat[index].name);
      window.luckysheet.setCellValue(row + index, column + 1, result);
    });
  };

  const getSelectionValue = (index) => {
    // const range = window.luckysheet.getRange();
    // console.log(range);
    const values = window.luckysheet.getRangeValue();
    // console.log(values);
    const selectedValues = values.map((val) => (val[0] ? parseInt(val[0].m) : 0));
    console.log(selectedValues);
    setSelInput(null);
    updateInputValue(index, selectedValues);
  };

  // const getOutputSelectionValue = () => {
  //   const values = window.luckysheet.getRangeValue(range);
  //   // console.log(values);
  //   const selectedValues = values.map(val => val[0] ? parseInt(val[0].m) : 0);
  //   console.log(selectedValues);
  //   setSelInput(null);
  // }

  const showInputBox = (input, index) => {
    if (input.type === 'array')
      return (
        <div className="mt-4">
          <label className="fw-bold" htmlFor={input.name}>
            {input.name}
          </label>
          <div className="input-group mb-3">
            <input className="form-control" onChange={(e) => updateInputValue(index, e.target.value)} />
            <button className={`btn ${selInput === index ? 'btn-secondary' : 'btn-primary'}`} onClick={(e) => (selInput !== null ? getSelectionValue(index) : setSelInput(index))}>
              <i class="fas fa-pen-alt"></i>
            </button>
          </div>
        </div>
      );
    else if (input.type === 'radio')
      return (
        <div className="mt-4">
          <label className="fw-bold" htmlFor={input.name}>
            {input.name}
          </label>
          <br />
          {input.options.map((option) => (
            <>
              <input type="radio" name={input.name} /> <label>{option}</label> &nbsp;&nbsp;
            </>
          ))}
        </div>
      );
    else if (input.type === 'checkbox')
      return (
        <div className="mt-4">
          <input type="checkbox" name={input.name} /> <label>{input.name}</label>
        </div>
      );
  };

  const showInputCategory = (category) => {
    console.log(selTool.inputs.filter((tool) => tool.category === category));
    return selTool.inputs.filter((tool) => tool.category === category).map((input, index) => showInputBox(input, index));
  };

  const showToolBox = () => {
    return (
      <>
        <h5 className="mt-5">{selTool.name}</h5>
        <hr />
        {/* {selTool.inputs.map((input, index) => (
          <>
            <label htmlFor={input.name}>{input.name}</label>
            <div className="input-group mb-3">
              <input className="form-control" onChange={(e) => updateInputValue(index, e.target.value)} />
              <button
                className={`btn ${selInput === index ? 'btn-secondary' : 'btn-primary'}`}
                onClick={(e) => (selInput !== null ? getSelectionValue(index) : setSelInput(index))}
              >
                <i class="fas fa-pen-alt"></i>
              </button>
            </div>
          </>
        ))} */}
        {/* <p className='mb-0 mt-5'>Input</p> */}
        <div className="">{showInputCategory('Input')}</div>
        {showInputCategory('Output')}
        <div className="input-group">
          <input className="form-control" placeholder="Output Range" value={outputRange} onChange={(e) => setOutputRange(e.target.value)} />
          <button className="btn btn-secondary">
            <i class="fas fa-pen-alt"></i>
          </button>
        </div>
        <button className="btn btn-primary mt-3" onClick={calculateResult}>
          Calculate
        </button>
      </>
    );
  };

  // window.addEventListener("mousedown", () => {
  //   const arr = window.luckysheet.getRangeArray('twoDimensional');
  //   console.log(arr);
  // });

  const selectTool = (e) => {
    let index = e.target.value;
    // console.log(toolpack[Object.keys(toolpack)[index]]);
    setSelTool(toolpack[Object.keys(toolpack)[index]]);
  };

  return (
    <div>
      <div className="row">
        <div id="sheet" style={luckyCss}></div>
        <div className="tool-box" style={toolboxCss}>
          <div className="card" style={{ height: '100%' }}>
            <div className="card-header">
              <h4>Toolbox</h4>
            </div>
            <div className="card-body">
              <label className="fw-bold">Select Tool From Toolpak</label>
              <select className="form-control" onChange={selectTool}>
                <option onClick={(e) => setSelTool(null)} value={0}>
                  Select a Tool
                </option>
                {Object.entries(toolpack).map((tool, index) => (
                  <option role="button" value={index}>
                    {tool[1].name}
                  </option>
                ))}
              </select>
              {selTool ? (
                showToolBox()
              ) : (
                <div>
                  <img
                    className="img-fluid"
                    alt=""
                    src="https://static.vecteezy.com/system/resources/previews/019/848/796/original/flat-magnifying-glass-icon-optical-tool-for-finding-details-reading-small-print-discovery-research-search-analysis-concept-minimal-style-of-magnifier-loupe-search-free-vector.jpg"
                  />
                  <p className="h6 text-muted text-center mt-3">Select a Tool to Continue</p>
                </div>
              )}
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
  width: '80%',
  height: '100%',
  left: '0px',
  top: '80px'
  //   zIndex: "-1",
};

const toolboxCss = {
  margin: '0px',
  padding: '0px',
  position: 'absolute',
  width: '20%',
  height: '100%',
  right: '0px',
  top: '80px'
  //   zIndex: "-1",
};

export default ExcelSheet;
