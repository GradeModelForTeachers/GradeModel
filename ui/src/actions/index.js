import mockEssay from '../tests/mock_data/essay_mock.json';
import mockRubric from '../tests/mock_data/rubric_mock.json';
import mockSummary from '../tests/mock_data/summary_mock.json';
import mockComments from '../tests/mock_data/comments_mock.json';

export const FETCH_ESSAY = 'FETCH_ESSAY';
export const FETCH_RUBRIC = 'FETCH_RUBRIC';
export const FETCH_SUMMARY = 'FETCH_SUMMARY';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export function fetchEssay() {
  return {
    type: FETCH_ESSAY,
    payload: {
      data: mockEssay,
    },
  };
}

export function fetchRubric() {
  return {
    type: FETCH_RUBRIC,
    payload: {
      data: { ...mockRubric },
    },
  };
}

export function fetchSummary() {
  return {
    type: FETCH_SUMMARY,
    payload: {
      data: { ...mockSummary },
    },
  };
}

export function fetchComments() {
  return {
    type: FETCH_COMMENTS,
    payload: {
      data: { ...mockComments },
    },
  };
}
