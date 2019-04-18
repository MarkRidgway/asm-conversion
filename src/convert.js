const read = require('./read');
const write = require('./write');

(async () => {
  try {
    // read xlsx file
    const asmJSON = read.getJSON('./data/asm.xlsx').Data;

    const importData = asmJSON.map(file => {
      return {
        ANIMALCODE: file.File || undefined,
        ANIMALNAME: file.Name || undefined,
        ANIMALSEX: file['Male Female'] || 'Unknown',
        ANIMALTYPE: file.Type || undefined,
        ANIMALCOLOR: file.Type || undefined,
        ANIMALBREED1: file.Color || undefined,
        ANIMALADDITIONALWEIGHT: file.Weight || undefined,
      };
    });

    const sortedData = importData.sort((a, b) => {
      a = a.ANIMALCODE.replace(/-/gm, '');
      b = b.ANIMALCODE.replace(/-/gm, '');
      return b - a;
    });

    const csv = write.writeCSV(importData.slice(1, 10));

    const results = await write.writeCSVFile('./data/asm.csv', csv);

    console.log({ results });

    process.exit(0);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
})();

// Data functions
