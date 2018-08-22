import { FETCH_SUMMARY } from '../actions/index';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUMMARY:
      return action.payload.data.summary;
    default:
      return state;
  }
};
