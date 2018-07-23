export const FETCH_ESSAY = 'FETCH_ESSAY'
import mockEssay from '../tests/mock_data/essay_mock.json'
export const FETCH_RUBRIC = 'FETCH_RUBRIC'
import mockRubric from '../tests/mock_data/rubric_mock.json'

export function fetchEssay() {
  return {
    type: FETCH_ESSAY,
    payload:{
       "data": {...mockEssay}
     }
  };
}

export function fetchRubric() {
  return {
    type: FETCH_RUBRIC,
    payload:{
       "data": {...mockRubric}
     }
  };
}
