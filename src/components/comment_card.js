import React, { Component } from 'react';
import CommentTextBox from './comment_text_box'

export default class CommentCard extends Component{
  constructor(){
    super()
  }

  render(){
     return (
        <div className= {`input-comment-container ${this.props.commentType}-section`}>
          <button  className="delete-comment-button"
          onClick= {this.props.handleDeleteComment}> Remove
          </button>
          <h4 className='comment-type'>{this.props.commentType}</h4>
          <CommentTextBox
          value={this.props.commentValue}
          />
        </div>
      );
  }
}
