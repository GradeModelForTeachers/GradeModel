import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import Homepage from './components/homepage';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);
import model from './model/grade_model';
import * as tf from "@tensorflow/tfjs/dist/index";

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.querySelector('.container-homepage'),
);

console.log('Loading model...');
model.createAndTrainModel();