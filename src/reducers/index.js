import {combineReducers } from 'redux';
import EssayTextReducer from './essay_text';

const rootReducer = combineReducers({
  essayText: EssayTextReducer,
});

export default rootReducer;
