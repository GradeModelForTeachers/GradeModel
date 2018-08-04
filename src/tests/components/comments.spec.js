import React from 'react'
import {render, fireEvent, cleanup} from 'react-testing-library'
import CommentTextBox from '../../components/comment_text_box'
import CommentCard from '../../components/comment_card'
import Comments from '../../containers/comments'
import {renderWithRedux} from '../test_helper'
import mockComments from '../mock_data/comments_mock.json'

afterEach(cleanup)


test('can render with mocked comment text', () => {
  const comments = renderWithRedux(<Comments />)
  const commentCard = render(<CommentCard />)
  const {getByTestId} = render(<CommentTextBox />)
  let commentTexts = mockComments.comments.map(comment => comment.commentText)
  expect(getByTestId('comment-text').textContent).toBe(commentTexts[0])
})

test('can render with mocked comment type', () => {
  const comments = renderWithRedux(<Comments />)
  const {getByTestId} = render(<CommentCard />)
  let commentTypes = mockComments.comments.map(comment => comment.commentType)
  expect(getByTestId('comment-type').textContent).toBe(commentTypes[0])
})
