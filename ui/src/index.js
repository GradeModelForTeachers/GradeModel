import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import Homepage from './components/HomePage/homepage';
import reducers from './indexReducer';

const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
  <Provider store={store}>
    <Homepage />
  </Provider>,
  document.querySelector('.container-homepage'),
);
