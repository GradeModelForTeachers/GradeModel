import React from 'react';
import PropTypes from 'prop-types';
import '../styles/comment_dropdown.css';

const CommentDropDown = (props => (
  <select
    onChange={props.handleSelectionChange}
    className=" selectpicker select-comment"
  >
    <option value="">
      {' '}
Select A Different Comment
      {' '}
    </option>
    <option value={props.option1}>
      {props.option1}
    </option>
    <option value={props.option2}>
      {props.option2}
    </option>
    <option value={props.option3}>
      {props.option3}
    </option>
  </select>
)
);
CommentDropDown.propTypes = {
  option1: PropTypes.string,
  option2: PropTypes.string,
  option3: PropTypes.string,
  handleSelectionChange: PropTypes.func.isRequired,
};

CommentDropDown.defaultProps = {
  option1: '',
  option2: '',
  option3: '',
};

export default CommentDropDown;
