import mockRubric from '../../tests/mock_data/rubric_mock.json';

const FETCH_RUBRIC = 'FETCH_RUBRIC';

export function fetchRubric() {
    return {
        type: FETCH_RUBRIC,
        payload: {
            data: { ...mockRubric },
        },
    };
}

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RUBRIC:
      return action.payload.data.rubric_items;
    default:
      return state;
  }
};
