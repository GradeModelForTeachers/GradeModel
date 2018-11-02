import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './comment_text_box.css';

export default class CommentTextBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      inputValue: '',
    };
  }

  componentWillMount= () => {
    this.setState({ inputValue: this.props.value });
  }

  componentDidUpdate = () => {
    this.setState({ inputValue: this.props.value });
  }

  handleDeleteCommmentText() {
    this.setState({
      count: 0,
      inputValue: '',
    });
  }

  handleTextChange(event) {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <div>
        <textarea data-testid="comment-text" value={this.state.inputValue} className="input-comment" onChange={this.handleTextChange.bind(this)} />
      </div>
    );
  }
}

CommentTextBox.propTypes = {
  value: PropTypes.string,
};

CommentTextBox.defaultProps = {
  value: '',
};
