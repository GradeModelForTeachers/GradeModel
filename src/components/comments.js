import React, { Component } from 'react';
import CommentTexrBox from './comment_text_box'
import CommentCard from './comment_card'
const NUMBEROFCOMMENTSALLOWED = 6
let commentTypleCollection = ["Thesis", "Thesis", "Argument"]

export default class Comments extends Component {
  constructor() {
    super();
    this.state = {
      commentKeys: [1, 2, 3],
      buttonDisabled: true,
      commentNumberToAdd: 4, // The next  comment we are going to add
    };
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleNewCommentSelection(e) {
    if (e.target.value === '') {
      this.setState({
        buttonDisabled: true,
      });
    } else {
      this.addToCommenetTypeCollection(this.state.commentNumberToAdd, e.target.value);
      this.setState({
        buttonDisabled: false,
      });
    }
  }

  addToCommenetTypeCollection(commentNumberToAdd, commentType) {
    commentTypleCollection[commentNumberToAdd] = commentType;
  }

  handleAddComment(commentNumberToAdd) {
    const commentKeys = [...this.state.commentKeys];
    commentKeys.push(commentNumberToAdd);
    if (commentNumberToAdd < NUMBEROFCOMMENTSALLOWED) {
      commentNumberToAdd += 1;
    }
    this.setState({
      commentNumberToAdd,
      commentKeys,
    });
  }

  handleDeleteComment(commentNumber) {
    const commentKeys = [...this.state.commentKeys];
    const index = commentNumber - 1;
    commentKeys.splice(index, 1);
    this.setState({
      commentKeys,
    });
  }

  render() {
    return (
      <div className="comments col-md-3">
        {this.state.commentKeys.includes(1)
          ? (
            <CommentCard
              handleDeleteComment={this.handleDeleteComment.bind(this, 1)}
              commentType="Thesis"
              commentValue="Great imagary"
            />
          )
          : null
      }

        {this.state.commentKeys.includes(2)
          ? (
            <CommentCard
              handleDeleteComment={this.handleDeleteComment.bind(this, 2)}
              commentType="Thesis"
              commentValue="Perfect"
            />
          )
          : null
      }

        {this.state.commentKeys.includes(3)
          ? (
            <CommentCard
              handleDeleteComment={this.handleDeleteComment.bind(this, 3)}
              commentType="Argument"
              commentValue="Does this go with the rest of the essay?"
            />
          )
          : null
      }

        {this.state.commentKeys.includes(4)
          ? (
            <CommentCard
              commentType={commentTypleCollection[4]}
              handleDeleteComment={this.handleDeleteComment.bind(this, 4)}
              commentValue=""
            />
          ) : null
      }

        {this.state.commentKeys.includes(5)
          ? (
            <CommentCard
              commentType={commentTypleCollection[5]}
              handleDeleteComment={this.handleDeleteComment.bind(this, 5)}
              commentValue=""
            />
          ) : null
      }
        {this.state.commentKeys.includes(6)
          ? (
            <CommentCard
              commentType={commentTypleCollection[6]}
              handleDeleteComment={this.handleDeleteComment.bind(this, 6)}
              commentValue=""
            />
          ) : null
      }
        <span className="add-comment col-md-6">
          <button
            disabled={this.state.buttonDisabled}
            onClick={this.handleAddComment.bind(this, this.state.commentNumberToAdd)}
            className="add-comment-button"
          >
Add Comment
          </button>
        </span>
        <select
          className="select-comment-type"
          onMouseLeave={this.handleNewCommentSelection.bind(this)}
        >
          <option value="">
            {' '}
Select A Comment To Add
            {' '}
          </option>
          <option value="Thesis">
            {' '}
Thesis Comment
            {' '}
          </option>
          <option value="Argument">
            {' '}
Argument Comment
            {' '}
          </option>
        </select>
      </div>
    );
  }
}
