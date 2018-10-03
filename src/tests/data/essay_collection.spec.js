import EssayCollection from '../../data/essay_collection';

const directory = 'src/data/sample_essay_collection';

test('should store all essays in collection', () => {
  const essayCollection = EssayCollection.fromDirectory(directory);
  expect(essayCollection.essays.length).toEqual(2);
});

test('should compute frequncies of all words in all essays in collection', () => {
  const essayCollection = EssayCollection.fromDirectory(directory);
  const expectedFrequencies = {
    essay: 4, text: 3, second: 2, sample: 3, here: 1,
  };
  expect(essayCollection.wordFrequencies).toEqual(expectedFrequencies);
});
