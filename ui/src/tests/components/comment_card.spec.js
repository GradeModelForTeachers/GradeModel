import React from 'react';
import { render, cleanup } from 'react-testing-library';
import CommentCard from '../../components/Essay/EssayComments/comment_card';
import renderWithRedux from '../test_helper';
import mockComments from '../mock_data/comments_mock.json';

describe('Comment Card', () => {
    afterEach(cleanup);

    test('renders comment card with correct comment type', () => {
        const type = 'Thesis';
        const commentText = 'this is my comment';
        const { getByTestId } = renderWithRedux(<CommentCard commentType={type} commentText={commentText} />);
        expect(getByTestId('comment-type').textContent).toBe(type);
    });

    test('renders comment card with correct comment text', () => {
        const type = 'Thesis';
        const commentText = 'this is my comment';
        const { getByTestId } = renderWithRedux(<CommentCard commentType={type} commentText={commentText} />);
        expect(getByTestId('comment-text').textContent).toBe(commentText);
    });
});