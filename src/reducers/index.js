import {combineReducers } from 'redux';
import EssayReducer from './essay';
import RubricReducer from './rubric';
import SummaryReducer from './summary';
import CommentsReducer from './comments';

const rootReducer = combineReducers({
  essay: EssayReducer,
  rubric:RubricReducer,
  summary:SummaryReducer,
  listOfComments:CommentsReducer
});

export default rootReducer;
