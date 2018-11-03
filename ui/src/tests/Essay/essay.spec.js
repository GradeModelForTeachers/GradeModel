import React from 'react';
import { cleanup } from 'react-testing-library';
import Essay from '../../components/Essay/essay';
import renderWithRedux from '../test_helper';
import mockEssayParsed from '../mock_data/essay_mock_parsed';

afterEach(cleanup);

test('can render with parsed essay text from mock data ', () => {
  const { getByTestId } = renderWithRedux(<Essay />);
  expect(getByTestId('essay_text').textContent).toBe(mockEssayParsed.essayText);
  expect(getByTestId('essay_title').textContent).toBe(mockEssayParsed.essayTitle);
});
