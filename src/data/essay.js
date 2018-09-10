class Essay { // TODO: component name could be confusing
  static fromEssayObject(essayObject) {
    return new Essay(essayObject);
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

  constructor(essayObject) {
    this.score = essayObject.score;
    this.essayText = essayObject.essay_text;
    this.bagOfWords = this.buildBagOfWords();
  }
}

export default Essay;
