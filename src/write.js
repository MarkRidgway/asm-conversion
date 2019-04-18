const fs = require('fs');
const path = require('path');
const { parse } = require('json2csv');

module.exports = { writeCSV, writeCSVFile };

function writeCSV(data) {
  const fields = [
    'ANIMALCODE',
    'ANIMALNAME',
    'ANIMALSEX',
    'ANIMALTYPE',
    'ANIMALCOLOR',
    'ANIMALBREED1',
    'ANIMALADDITIONALWEIGHT',
  ];
  const opts = { fields };

  try {
    return parse(data, opts);
  } catch (err) {
    throw err;
  }
}

function writeCSVFile(fileName, dataToWrite) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(process.cwd(), fileName);
    fs.writeFile(filePath, dataToWrite, 'utf8', err => {
      if (err) {
        reject(err);
      }

      resolve(`file written to ${filePath}`);
    });
  });
}
