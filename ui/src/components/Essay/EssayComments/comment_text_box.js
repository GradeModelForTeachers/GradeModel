import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './comment_text_box.css';

export default class CommentTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentText: '',
    };
  }

  componentDidMount() {
    this.setState({ commentText: this.props.initialValue });
  }

  handleTextChange(event) {
    this.setState({ commentText: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea data-testid="comment-text" value={this.state.commentText} className="input-comment" onChange={this.handleTextChange.bind(this)} />
      </div>
    );
  }
}

CommentTextBox.propTypes = {
  initialValue: PropTypes.string,
};

CommentTextBox.defaultProps = {
  initialValue: '',
};
