import {FETCH_ESSAY} from '../actions/index';

export default (state = {}, action) => {
  switch (action.type){
    case FETCH_ESSAY:
      let data = action.payload.data
      return data
    default:
      return state
  }
}
