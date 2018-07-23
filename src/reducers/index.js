import {combineReducers } from 'redux';
import EssayReducer from './essay';
import RubricReducer from './rubric';

const rootReducer = combineReducers({
  essay: EssayReducer,
  rubric:RubricReducer
});

export default rootReducer;
