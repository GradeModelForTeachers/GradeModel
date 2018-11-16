import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentTextBox from './comment_text_box';
import CommentDropDown from './comment_dropdown';
import './comment_card.css';

export default class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = { commentText: '' };
  }

  handleSelectionChange = (event) => {
    this.setState({ commentText: event.target.value });
  };

  render() {
    return (this.props.commentSuggestions === undefined ? null
      : (
        <div className={`input-comment-container ${this.props.commentType}-section`} data-testid={`comment-card-${this.props.commentId}`}>
          <button
            className="delete-comment-button"
            onClick={this.props.handleDeleteComment}
          >
            Remove
          </button>
          <h4 data-testid="comment-type" className="comment-type">{this.props.commentType}</h4>
          <CommentTextBox initialValue={this.props.commentText} />
          <div>
            <CommentDropDown
              text=""
              option1={this.props.commentSuggestions[0]}
              option2={this.props.commentSuggestions[1]}
              option3={this.props.commentSuggestions[2]}
              handleSelectionChange={this.handleSelectionChange}
            />
          </div>
        </div>
      )
    );
  }
}

CommentCard.propTypes = {
  commentId: PropTypes.string,
  commentSuggestions: PropTypes.array,
  handleDeleteComment: PropTypes.func,
  commentText: PropTypes.string,
  commentType: PropTypes.string,
};

CommentCard.defaultProps = {
  commentId: '',
  commentSuggestions: [],
  handleDeleteComment: () => {},
  commentText: '',
  commentType: '',
};
