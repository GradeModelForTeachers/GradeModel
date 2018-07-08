import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import Essay from '../../components/essay.js'
import {renderWithRedux} from '../test_helper.js'

afterEach(cleanup)

test('can render with redux with defaults', () => {
  const {getByTestId, fetchEssay} = renderWithRedux(<Essay />)
   fireEvent.componentDidMount
  expect(getByTestId('essay_text').textContent).toBe('Loading Essay')
  expect(getByTestId('essay_title').textContent).toBe('')
})
