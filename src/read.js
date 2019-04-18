const excelToJson = require('convert-excel-to-json');
const path = require('path');

module.exports = { getJSON };

function getJSON(filepath) {
  const fullFilePath = path.join(process.cwd(), filepath);
  const result = excelToJson({
    sourceFile: fullFilePath,
    header: {
      rows: 1,
    },
    sheets: ['Data'],
    columnToKey: {
      '*': '{{columnHeader}}',
    },
    // range: 'A2:CZ1403',
  });

  return result;
}
