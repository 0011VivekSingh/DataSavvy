import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useSheetContext } from "../../context/SheetProvider";

const ExcelSheet = () => {
  const [sheet, setSheet] = useState(window.luckysheet);
  const { toolpack } = app_config;
  const { selTool, setSelTool } = useSheetContext();

  useEffect(() => {
    sheet.create({
      container: "sheet",
      //   plugins: ["chart"],
    });
    setSheet(sheet);
  }, []);

  const showToolBox = () => {
    return (
      <>
        {selTool.inputs.map((input) => (
          <>
            <label htmlFor={input.name}>{input.name}</label>
            <input className="form-control mb-3" id={input.name} name={input.name} />
          </>
        ))}
      </>
    );
  };

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
  margin: "0px",
  padding: "0px",
  position: "absolute",
  width: "70%",
  height: "100%",
  left: "0px",
  top: "0px",
  //   zIndex: "-1",
};

const toolboxCss = {
  margin: "0px",
  padding: "0px",
  position: "absolute",
  width: "30%",
  height: "100%",
  right: "0px",
  top: "0px",
  //   zIndex: "-1",
};

export default ExcelSheet;
