import Essay from '../../data/essay.js';

const sampleEssayPath = 'src/data/sample_essay_collection/';
const sampleEssayFilename = 'sample_essay.json';

test('should build bag of words with correct counts', () => {
  const essay = Essay.fromEssayObject(sampleEssayPath, sampleEssayFilename);
  expect(essay.bagOfWords).toEqual({'essay': 4, 'text': 3});
});