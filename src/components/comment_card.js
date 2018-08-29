import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentTextBox from './comment_text_box';
import CommentDropDown from './comment_dropdown';

export default class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: '',
    };
  }

  handleSelectionChange = (event) => {
    this.setState({ commentValue: event.target.value });
  }

  render() {
    return (this.props.commentSuggestions === undefined ? null
      : (
        <div className={`input-comment-container ${this.props.commentType}-section`}>
          <button
            className="delete-comment-button"
            onClick={this.props.handleDeleteComment}
          >
            {' '}
Remove
          </button>
          <h4 data-testid="comment-type" className="comment-type">{this.props.commentType}</h4>
          <CommentTextBox
            value={this.state.commentValue === '' ? this.props.commentValue : this.state.commentValue}
          />
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
  commentSuggestions: PropTypes.array,
  handleDeleteComment: PropTypes.func,
  commentValue: PropTypes.string,
  commentType: PropTypes.string,
};

CommentCard.defaultProps = {
  commentSuggestions: [],
  handleDeleteComment: () => {},
  commentValue: '',
  commentType: '',
};
