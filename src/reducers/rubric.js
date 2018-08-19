import { FETCH_RUBRIC } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RUBRIC:
      const data = action.payload.data.rubric_items;
      return data;
    default:
      return state;
  }
};
