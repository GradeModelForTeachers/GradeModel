import { combineReducers } from 'redux';
import EssayReducer from './components/Essay/essayReducer';
import RubricReducer from './components/Rubric/rubricReducer';
import SummaryReducer from './components/Summary/summaryReducer';
import CommentsReducer from './components/Essay/EssayComments/commentsReducer';

const rootReducer = combineReducers({
  essay: EssayReducer,
  rubric: RubricReducer,
  summary: SummaryReducer,
  listOfComments: CommentsReducer,
});

export default rootReducer;
