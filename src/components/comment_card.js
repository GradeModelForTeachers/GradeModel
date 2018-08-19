import React, { Component } from 'react';
import CommentTextBox from './comment_text_box';
import CommentDropDown from './comment_dropdown';

export default class CommentCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleSelectionChange() {
    this.setState(
      prevState => ({ count: prevState.count + 1 }),
    );
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
            value={this.props.commentValue}
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
