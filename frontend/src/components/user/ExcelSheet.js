import React, { useEffect, useState } from "react";

const ExcelSheet = () => {
  const [sheet, setSheet] = useState(window.luckysheet);

  useEffect(() => {
    sheet.create({
      container: "sheet",
      //   plugins: ["chart"],
    });
    setSheet(sheet);
  }, []);

  return (
    <div>
      <div className="row">
        <div id="sheet" style={luckyCss}></div>
        <div className="tool-box" style={toolboxCss}>
            <div className="card">
                <div className="card-header">
                    <h4>Toolbox</h4>
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
