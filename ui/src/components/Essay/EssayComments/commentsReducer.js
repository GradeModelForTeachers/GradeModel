import mockComments from '../../../tests/mock_data/comments_mock.json';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function fetchComments() {
    return {
        type: FETCH_COMMENTS,
        payload: {
            data: { ...mockComments },
        },
    };
}

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_COMMENTS:
      return action.payload.data.comments;
    default:
      return state;
  }
};
