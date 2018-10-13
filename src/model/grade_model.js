import * as tf from '@tensorflow/tfjs';

export default {
  createAndTrainModel() {
    // Define a model for linear regression.
    const model = tf.sequential();
    model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

    // Prepare the model for training: Specify the loss and the optimizer.
    model.compile({ loss: 'meanSquaredError', optimizer: 'sgd' });

    // Generate some synthetic data for training.
    // xs contains the datapoints, ys contains their corresponding labels
    const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
    const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

    // Train the model using the data.
    model.fit(xs, ys, { epochs: 50 }).then(() => {
      // Use the model to do inference on a data point the model hasn't seen before:
      model.predict(tf.tensor2d([4], [1, 1])).print();
    });
  },

  // loadKerasModel = async() => {
  //   const model = await tf.loadModel('src/model/model.json');
  //   model.predict(tf.tensor2d([5], [1, 1])).print();
  // }
};
