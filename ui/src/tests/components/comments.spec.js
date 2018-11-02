import React from 'react';
import { render, cleanup } from 'react-testing-library';
import CommentTextBox from '../../components/Essay/EssayComments/comment_text_box';
import CommentCard from '../../components/Essay/EssayComments/comment_card';
import Comments from '../../components/Essay/EssayComments/comments';
import renderWithRedux from '../test_helper';
import mockComments from '../mock_data/comments_mock.json';

afterEach(cleanup);


test('can render with mocked comment text', () => {
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "comments" }] */
  const comments = renderWithRedux(<Comments />);
  const { getByTestId } = render(<CommentTextBox />);
  const commentTexts = mockComments.comments.map(comment => comment.commentText);
  expect(getByTestId('comment-text').textContent).toBe(commentTexts[0]);
});

test('can render with mocked comment type', () => {
  const comments = renderWithRedux(<Comments />);
  const { getByTestId } = render(<CommentCard />);
  const commentTypes = mockComments.comments.map(comment => comment.commentType);
  expect(getByTestId('comment-type').textContent).toBe(commentTypes[0]);
});
