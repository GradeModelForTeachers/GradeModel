import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CommentCard from '../components/comment_card';
import { fetchComments } from '../actions/index';

const NUMBEROFCOMMENTSALLOWED = 6;
const commentTypleCollection = ['Thesis', 'Thesis', 'Argument'];

export class Comments extends Component {
  constructor() {
    super();
    this.state = {
      commentKeys: [1, 2, 3],
      buttonDisabled: true,
      commentNumberToAdd: 4, // The next  comment we are going to add
    };
  }

  componentDidMount() {
    this.props.fetchComments();
  }


  addToCommenetTypeCollection = (commentNumberToAdd, commentType) => {
    commentTypleCollection[commentNumberToAdd] = commentType;
  }

  handleAddComment = (commentNumberToAdd) => {
    const commentKeys = (prevState => [...prevState.commentKeys]);
    let commentNumberToAddIncrease = 0;
    commentKeys.push(commentNumberToAdd);
    if (commentNumberToAdd < NUMBEROFCOMMENTSALLOWED) {
      commentNumberToAddIncrease = commentNumberToAdd;
      commentNumberToAddIncrease += 1;
    }
    this.setState({
      commentNumberToAdd: commentNumberToAddIncrease,
      commentKeys,
    });
  }

  handleDeleteComment = (commentNumber) => {
    const commentKeys = { ...prevState => ([...prevState.commentKeys]) };
    const index = commentNumber - 1;
    commentKeys.splice(index, 1);
    this.setState({
      commentKeys,
    });
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


  render() {
    const commentTexts = Object.keys(this.props.listOfComments).length === 0 ? null
      : this.props.listOfComments.map(comment => comment.commentText);
    const commentTypes = Object.keys(this.props.listOfComments).length === 0 ? null
      : this.props.listOfComments.map(comment => comment.commentType);
    const commentSuggestions = Object.keys(this.props.listOfComments).length === 0 ? null
      : this.props.listOfComments.map(comment => comment.commentSuggestions);
    return (commentTexts === null ? null
      : (
        <div className="comments col-md-3">
          {this.state.commentKeys.includes(1)
            ? (
              <CommentCard
                handleDeleteComment={() => this.handleDeleteComment(1)}
                commentType={commentTypes[0]}
                commentValue={commentTexts[0]}
                commentSuggestions={commentSuggestions[0]}
              />
            )
            : null
      }

          {this.state.commentKeys.includes(2)
            ? (
              <CommentCard
                handleDeleteComment={() => this.handleDeleteComment(2)}
                commentType={commentTypes[1]}
                commentValue={commentTexts[1]}
                commentSuggestions={commentSuggestions[1]}
              />
            )
            : null
      }

          {this.state.commentKeys.includes(3)
            ? (
              <CommentCard
                handleDeleteComment={() => this.handleDeleteComment(3)}
                commentType={commentTypes[2]}
                commentValue={commentTexts[2]}
                commentSuggestions={commentSuggestions[1]}
              />
            )
            : null
      }

          {this.state.commentKeys.includes(4)
            ? (
              <CommentCard
                commentType={commentTypleCollection[4]}
                handleDeleteComment={() => this.handleDeleteComment(4)}
                commentValue=""
                commentSuggestions={commentSuggestions[1]}
              />
            ) : null
      }

          {this.state.commentKeys.includes(5)
            ? (
              <CommentCard
                commentType={commentTypleCollection[5]}
                handleDeleteComment={() => this.handleDeleteComment(5)}
                commentValue=""
                commentSuggestions={commentSuggestions[1]}
              />
            ) : null
      }
          {this.state.commentKeys.includes(6)
            ? (
              <CommentCard
                commentType={commentTypleCollection[6]}
                handleDeleteComment={() => this.handleDeleteComment(6)}
                commentValue=""
                commentSuggestions={commentSuggestions[1]}
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
      )
    );
  }
}

function mapStateToProps({ listOfComments }) {
  return { listOfComments };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchComments }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(Comments);
