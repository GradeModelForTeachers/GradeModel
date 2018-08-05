import React, { Component } from 'react';

export default class CommentDropDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <select
        onChange={this.props.handleSelectionChange}
        className=" selectpicker select-comment"
      >
        <option value="">
          {' '}
Select A Different Comment
          {' '}
        </option>
        <option value={this.props.option1}>
          {this.props.option1}
        </option>
        <option value={this.props.option2}>
          {this.props.option2}
        </option>
        <option value={this.props.option3}>
          {this.props.option3}
        </option>
      </select>
    );
  }
}
