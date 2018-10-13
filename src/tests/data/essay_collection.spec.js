import * as tf from '@tensorflow/tfjs';
import EssayCollection from '../../data/essay_collection';

const directory = 'src/data/sample_essay_collection';
const essayCollection = EssayCollection.fromDirectory(directory);

test('should store all essays in collection', () => {
  expect(essayCollection.essays.length).toEqual(2);
});

test('should compute frequencies of all words in all essays in collection', () => {
  const expectedFrequencies = {
    essay: 4, text: 3, second: 2, sample: 3, here: 1,
  };
  expect(essayCollection.wordFrequencies).toEqual(expectedFrequencies);
});

test('should build corpus of all words in all essays in collection', () => {
  const expectedCorpus = ['essay', 'text', 'second', 'sample', 'here'];
  expect(essayCollection.corpus).toEqual(expectedCorpus);
});

test('should vectorize single word as one-hot vector', () => {
  const expectedVector = [0, 0, 0, 0, 1];
  expect(essayCollection.buildOneHotVector('here')).toEqual(expectedVector);
});

test('should vectorize essay text in tf.js format', () => {
  const expectedVectors = tf.tensor2d([
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [1, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1],
  ]);
  expect(essayCollection.features.shape).toEqual(expectedVectors.shape);
  expect(essayCollection.features.dtype).toEqual(expectedVectors.dtype);
  expect(essayCollection.features.size).toEqual(expectedVectors.size);
  expect(essayCollection.features.strides).toEqual(expectedVectors.strides);
});
