import { FETCH_ESSAY } from '../actions/index';

export default (state = { essayTitle: '', essayText: 'Loading Essay' }, action) => {
  switch (action.type) {
    case 'FETCH_ESSAY':
      const data = action.payload.data;
      return data;
    default:
      return state;
  }
};
