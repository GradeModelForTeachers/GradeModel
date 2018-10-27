const fs = require('fs');
const fse = require('fs-extra');

const ESSAY_ID_INDEX = 0
const ESSAY_INDEX = 2
const ESSAY_SCORE_INDEX = 6

// console.log('* deleting any previous temp directories...');
// fs.readdirSync('./data', function(err, files){
//     if(err) console.error(err);
//     console.log(files);
//     files.filter(name => name.startsWith('output')).forEach(fse.removeSync);
// });
// console.log('*** done deleting.');

console.log('* creating a temp directory...');
tempDir = fs.mkdtempSync('./data/output');
console.log(tempDir);
console.log('*** done creating.');

console.log('* starting to parse data...');
// For now just parsing the first 5 essays in the dataset
fs.readFileSync('./data/training_set_rel3.tsv', 'utf8').toString()
    .split('\n').slice(0, 5).forEach(function(line) {
    tokens = line.split('\t')
    essayData = {
        "scores": {
          "thesis": tokens[ESSAY_SCORE_INDEX]
        },
        "essay_text": tokens[ESSAY_INDEX]
      }
    let data = JSON.stringify(essayData);
    fs.writeFileSync(`${tempDir}/essay${tokens[ESSAY_ID_INDEX]}.json`, data);
});

console.log('*** done parsing data.');