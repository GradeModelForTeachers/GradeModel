import fs from 'fs';
import path from 'path';

class Essay {
  static fromEssayObject(essayPath) {
    return new Essay(essayPath);
  }

  buildBagOfWords() {
    // count words in essay text
    const words = this.essayText.split(' ').reduce((count, word) => {
      // eslint-disable-next-line no-param-reassign no-prototype-builtins
      count[word] = count.hasOwnProperty(word) ? count[word] + 1 : 1;
      return count;
    }, {});

    return words;
  }

  constructor(essayPath) {
    // const essayObject = JSON.parse(fs.readFileSync(essayPath, 'utf8'));
    const essayObject = JSON.parse(fs.readFileSync(path.resolve(essayPath)));
    this.score = essayObject.score;
    this.essayText = essayObject.essay_text;
    this.bagOfWords = this.buildBagOfWords();
  }
}

export default Essay;
