import EssayCollection from '../../data/essay_collection';

const directory = 'src/data/sample_essay_collection';
const essayCollection = EssayCollection.fromDirectory(directory);

test('should store all essays in collection', () => {
  expect(essayCollection.essays.length).toEqual(2);
});

test('should compute frequncies of all words in all essays in collection', () => {
  const expectedFrequencies = {
    essay: 4, text: 3, second: 2, sample: 3, here: 1,
  };
  expect(essayCollection.wordFrequencies).toEqual(expectedFrequencies);
});

test('should build corpus of all words in all essays in collection', () => {
  const expectedCorpus = ['essay', 'text', 'second', 'sample', 'here'];
  expect(essayCollection.corpus).toEqual(expectedCorpus);
});
