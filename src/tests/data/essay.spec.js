import Essay from '../../data/essay.js';
import sampleEssay from '../../data/sample_essay.js';

test('should build bag of words with correct counts', () => {
  const essay = Essay.fromEssayObject(sampleEssay);
  expect(essay.bagOfWords).toEqual({'essay': 4, 'text': 3});
});