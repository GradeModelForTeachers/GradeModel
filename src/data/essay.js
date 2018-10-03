import fs from 'fs';
import path from 'path';

class Essay {
  static fromEssayObject(relativePath, essayFilename) {
    return new Essay(relativePath, essayFilename);
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

  constructor(relativePath, essayFilename) {
    const essayObject = JSON.parse(fs.readFileSync(path.resolve(relativePath, essayFilename)));
    this.score = essayObject.score;
    this.essayText = essayObject.essay_text;
    this.bagOfWords = this.buildBagOfWords();
  }
}

export default Essay;
