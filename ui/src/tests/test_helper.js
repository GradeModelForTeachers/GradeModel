import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-testing-library';
import reducers from '../indexReducer';

export default function renderWithRedux(
  ui,
  { initialState, store = createStore(reducers, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}
