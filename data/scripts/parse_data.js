const fs = require('fs');
const fse = require('fs-extra');
const glob = require("glob");
const Excel = require('exceljs');

const ESSAY_SET_DESC_ID_INDEX = 1;
const ESSAY_SET_DESC_TYPE_INDEX = 2;

const ESSAY_ID_INDEX = 0;
const ESSAY_SET_INDEX = 1;
const ESSAY_INDEX = 2;
const ESSAY_SCORE_INDEX = 6;

let essayTypes = {};

console.log('* deleting any previous temp directories...');
oldTempDirs = glob.glob("./data/data/output*", function(err, files) {
    if (err) throw err;
    console.log(`Deleting the old temp files: ${files}`);
    files.forEach(file => fse.removeSync(file));
});
console.log('*** done deleting.');

console.log('* creating a temp directory...');
tempDir = fs.mkdtempSync('./data/data/output');
console.log(tempDir);
console.log('*** done creating.');

console.log('* parsing dataset meta-data...');
// read from a file
var workbook = new Excel.Workbook();
workbook.xlsx.readFile('./data/data/essay_set_descriptions.xlsx')
    .then(function() {
        console.log('read workbook successfully!');
        var worksheet = workbook.getWorksheet(1);
        // Iterate over all rows that have values in a worksheet
        worksheet.eachRow(function(row, rowNumber) {
            if (rowNumber !== 1) {
                essayTypes[row.getCell(ESSAY_SET_DESC_ID_INDEX).value] = row.getCell(ESSAY_SET_DESC_TYPE_INDEX).value;
            }
        });

        console.log('** essay types');
        console.log(essayTypes);

        console.log('*** done parsing meta-data.');

        console.log('* starting to parse data...');
        // For now just parsing the first 5 essays in the dataset
        fs.readFileSync('./data/data/training_set_rel3.tsv', 'utf8').toString()
            .split('\n').slice(0, 5).forEach(function(line) {
            tokens = line.split('\t')
            essayData = {
                "scores": {
                "thesis": tokens[ESSAY_SCORE_INDEX]
                },
                "essay_type": essayTypes[tokens[ESSAY_SET_INDEX]],
                "essay_text": tokens[ESSAY_INDEX]
            }
            let data = JSON.stringify(essayData);
            fs.writeFileSync(`${tempDir}/essay${tokens[ESSAY_ID_INDEX]}.json`, data);
        });
        console.log('*** done parsing data.');
    })
    .catch(function(error) {
        console.log(error);
    });