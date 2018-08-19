import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { render } from 'react-testing-library';
import reducers from '../reducers';

export function renderWithRedux(
  ui,
  { initialState, store = createStore(reducers, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}
