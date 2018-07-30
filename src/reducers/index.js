import {combineReducers } from 'redux';
import EssayReducer from './essay';
import RubricReducer from './rubric';
import SummaryReducer from './summary';

const rootReducer = combineReducers({
  essay: EssayReducer,
  rubric:RubricReducer,
  summary:SummaryReducer
});

export default rootReducer;
