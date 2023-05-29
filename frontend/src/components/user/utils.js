function convertCellNotationToIndexes(cellNotation) {
    const column = cellNotation.match(/[A-Z]+/)[0];
    const row = parseInt(cellNotation.match(/\d+/)[0], 10) - 1;
    const columnNumber = columnToNumber(column);
  
    return { row, column: columnNumber };
  }
  
  function columnToNumber(column) {
    let result = 0;
  
    for (let i = 0; i < column.length; i++) {
      const charCode = column.charCodeAt(i) - 65; // 'A' starts at 65 in ASCII
      result = result * 26 + charCode + 1;
    }
  
    return result - 1;
  }
  
  // Example usage
//   const cellNotation = "B4";
//   const { row, column } = convertCellNotationToIndexes(cellNotation);
  
//   console.log("Row:", row);
//   console.log("Column:", column);

export {convertCellNotationToIndexes, columnToNumber};