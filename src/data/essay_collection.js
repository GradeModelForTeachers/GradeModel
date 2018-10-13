import path from 'path';
import fs from 'fs';
import * as tf from '@tensorflow/tfjs';
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
        // eslint-disable-next-line no-param-reassign,no-prototype-builtins
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

  vectorizeCollection() {
    const combinedText = this.essays.reduce((text, essay) => text.concat(essay.essayText.split(' ')), []);
    const vectors = combinedText.map(word => this.buildOneHotVector(word));
    return tf.tensor2d(vectors);
  }

  constructor(directory) {
    this.directory = directory;
    this.essays = this.storeEssays();
    // map of unique words to number of occurrences in essay collection
    this.wordFrequencies = this.buildWordFrequencies();
    // array of all unique words in entire essay collection
    this.corpus = Object.keys(this.wordFrequencies);
    this.features = this.vectorizeCollection();
  }
}

export default EssayCollection;
