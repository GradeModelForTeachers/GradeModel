import React from 'react';
import { fireEvent, render, cleanup } from 'react-testing-library';
import CommentTextBox from '../../components/Essay/EssayComments/comment_text_box';
import CommentCard from '../../components/Essay/EssayComments/comment_card';
import Comments from '../../components/Essay/EssayComments/comments';
import renderWithRedux from '../test_helper';
import mockComments from '../mock_data/comments_mock.json';

afterEach(cleanup);

test('can render with mocked comment text', () => {
  const { getByTestId } = renderWithRedux(<Comments />);
  const commentTexts = mockComments.comments.map(comment => comment.commentText);
  expect(getByTestId('comment-text').textContent).toBe(commentTexts[0]);
});

test('can render with mocked comment type', () => {
  const { getByTestId } = renderWithRedux(<Comments />);
  const commentTypes = mockComments.comments.map(comment => comment.commentType);
  expect(getByTestId('comment-type').textContent).toBe(commentTypes[0]);
});

test('should render comment box for each comment in list of comments', () => {
  const { getByTestId } = renderWithRedux(<Comments />);
  mockComments.comments.forEach((commentInfo) => {
    expect(getByTestId(`comment-card-${commentInfo.id}`).textContent).toContain(commentInfo.commentText);
  });
});

test('removes comment when its remove button is clicked', () => {
  const { queryAllByTestId, queryAllByText } = renderWithRedux(<Comments />);
  const commentIdToRemove = mockComments.comments[0].id

  expect(queryAllByTestId('comment-text')).toHaveLength(mockComments.comments.length)

  fireEvent.click(queryAllByText('Remove')[0])

  expect(queryAllByTestId('comment-text')).toHaveLength(mockComments.comments.length - 1)
});

test('displays comment that user adds in the add comment box', () => {

});