import {FETCH_SUMMARY} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_SUMMARY:
      let data = action.payload.data.summary
      return data
    default:
      return state
  }
}
