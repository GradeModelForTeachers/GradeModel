import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CommentTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: '',
    };
  }

  handleDeleteCommmentText() {
    this.setState({
      count: 0,
      inputValue: '',
    });
  }

  handleTextChange(e) {
    this.setState(
      prevState => ({
        count: prevState.count + 1,
        inputValue: e.target.value,
      }),
    );
  }

  render() {
    return (
      <div className="individual comment">
        {this.state.count < 1
          ? <textarea data-testid="comment-text" value={this.props.value} className="input-comment" onChange={this.handleTextChange.bind(this)} />
          : <textarea value={this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} />
              }
      </div>
    );
  }
}

CommentTextBox.propTypes = {
  value: PropTypes.string.isRequired,
};
