import path from 'path';
import fs from 'fs';
import Essay from './essay';

class EssayCollection {
  static fromDirectory(directory) {
    return new EssayCollection(directory);
  }

  storeEssays() {
    const fullDirectoryPath = path.resolve(this.directory);
    const files = fs.readdirSync(fullDirectoryPath);
    return files.map(essayFile => Essay.fromEssayObject(this.directory, essayFile));
  }

  buildWordFrequencies() {
    return this.essays.reduce((wordFrequencies, essay) => {
      Object.keys(essay.bagOfWords).forEach((word) => {
        wordFrequencies[word] = wordFrequencies.hasOwnProperty(word)
          ? wordFrequencies[word] + essay.bagOfWords[word]
          : essay.bagOfWords[word];
      });
      return wordFrequencies;
    }, {});
  }

  buildOneHotVector(word) {
    const oneHotVector = Array(...Array(this.corpus.length)).map(Number.prototype.valueOf, 0);
    oneHotVector[this.corpus.indexOf(word)] = 1;
    return oneHotVector;
  }

  constructor(directory) {
    this.directory = directory;
    this.essays = this.storeEssays();
    this.wordFrequencies = this.buildWordFrequencies();
    this.corpus = Object.keys(this.wordFrequencies);
  }
}

export default EssayCollection;
