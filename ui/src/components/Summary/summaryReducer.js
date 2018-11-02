import mockSummary from '../../tests/mock_data/summary_mock.json';

export const FETCH_SUMMARY = 'FETCH_SUMMARY';

export function fetchSummary() {
    return {
        type: FETCH_SUMMARY,
        payload: {
            data: { ...mockSummary },
        },
    };
}

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUMMARY:
      return action.payload.data.summary;
    default:
      return state;
  }
};
