import React from 'react';
import { cleanup } from 'react-testing-library';
import Summary from '../../components/summary';
import renderWithRedux from '../test_helper';
import mockSummary from '../mock_data/summary_mock';

afterEach(cleanup);

test('can render with summary text from mock data ', () => {
  const { getByTestId } = renderWithRedux(<Summary />);

  expect(getByTestId('summary').textContent).toBe(mockSummary.summary.join(''));
});
