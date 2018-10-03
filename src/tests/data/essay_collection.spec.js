import EssayCollection from '../../data/essay_collection';

const directory = 'src/data/sample_essay_collection';

test('should store all essays in collection', () => {
  const essayCollection = EssayCollection.fromDirectory(directory);
  expect(essayCollection.essays.length).toEqual(2);
});

// test('should build corpus of all words in all essays in collection', () => {
//   const essayCollection = EssayCollection.fromDirectory(directory);
//   expect(essayCollection.corpus).toEqual(['essay', 'text', 'second', 'sample', 'here']);
// });
