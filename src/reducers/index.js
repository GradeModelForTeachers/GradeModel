import {combineReducers } from 'redux';
import EssayReducer from './essay';

const rootReducer = combineReducers({
  essay: EssayReducer,
});

export default rootReducer;
