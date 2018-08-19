import { FETCH_COMMENTS } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      const data = action.payload.data.comments;
      return data;
    default:
      return state;
  }
};
