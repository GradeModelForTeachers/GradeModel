import { FETCH_RUBRIC } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RUBRIC:
      return action.payload.data.rubric_items;
    default:
      return state;
  }
};
