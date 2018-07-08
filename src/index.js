import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from "./components/homepage";
import {createStore, applyMiddleware, combineReducers} from "redux";
import {Provider} from "react-redux";
import reduxPromise from 'redux-promise-middleware';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

ReactDOM.render(
<Provider store={store}>
    <Homepage />
</Provider>,
  document.querySelector('.container-homepage')
);
