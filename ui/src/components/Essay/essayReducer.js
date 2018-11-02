import mockEssay from '../../tests/mock_data/essay_mock.json';

const FETCH_ESSAY = 'FETCH_ESSAY';

export function fetchEssay() {
    return {
        type: FETCH_ESSAY,
        payload: {
            data: mockEssay,
        },
    };
}

export default (state = { essayTitle: '', essayText: 'Loading Essay' }, action) => {
  switch (action.type) {
    case FETCH_ESSAY:
      return action.payload.data;
    default:
      return state;
  }
};
