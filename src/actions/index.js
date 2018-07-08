export const FETCH_ESSAY = 'FETCH_ESSAY'

export function fetchEssay() {
  // read essay and pass it as the payload
  return {
    type: FETCH_ESSAY,
    payload: null
  };
}
