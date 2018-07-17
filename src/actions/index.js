export const FETCH_ESSAY = 'FETCH_ESSAY'
import mockEssay from '../tests/mock_data/essay_mock.json'

export function fetchEssay() {

  return {
    type: FETCH_ESSAY,
    payload:{
       "data": {...mockEssay}
     }
  };
}
