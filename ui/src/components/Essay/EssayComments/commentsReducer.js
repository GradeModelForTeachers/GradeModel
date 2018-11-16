import uuidv4 from 'uuid/v4';
import mockComments from '../../../tests/mock_data/comments_mock.json';

const types = {
    FETCH_COMMENTS: 'FETCH_COMMENTS',
    REMOVE_COMMENT: 'REMOVE_COMMENT',
    ADD_COMMENT: 'ADD_COMMENT'
};

export const fetchComments = () => ({
    type: types.FETCH_COMMENTS,
    payload: {
        data: { ...mockComments },
    },
});

export const deleteComment = (commentId) => ({
    type: types.REMOVE_COMMENT,
    payload: { commentId }
});

export const addComment = ({commentText, commentType}) => ({
   type: types.ADD_COMMENT,
   payload: {commentText, commentType}
});

const initialState = {
    comments: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS:
            return {...state, comments: action.payload.data.comments};
      case types.ADD_COMMENT:
            return { ...state, comments: [ ...state.comments, newComment ] };
        case types.REMOVE_COMMENT:
            return { ...state, comments: state.comments.filter((comment) => comment.id !== action.payload.commentId) };
        default:
            return state;
    }
};
