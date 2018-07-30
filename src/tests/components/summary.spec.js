import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import Summary from '../../components/summary.js'
import {renderWithRedux} from '../test_helper.js'
import mockSummary from '../mock_data/summary_mock'

afterEach(cleanup)

test('can render with summary text from mock data ', () => {
  const {getByTestId} = renderWithRedux(<Summary />)


  expect(getByTestId('summary').textContent).toBe(mockSummary.summary.join(""))
})
