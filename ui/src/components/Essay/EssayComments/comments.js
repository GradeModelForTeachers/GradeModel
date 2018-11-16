import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CommentCard from './comment_card';
import AddCommentBox from './add_comment_box';
import { fetchComments, deleteComment, addComment} from './commentsReducer';
import './comments.css';

export class Comments extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.fetchComments();
  }

  render() {
      return (
          <div className="comments">
            {
                this.props.comments.map((comment) => (
                    <CommentCard
                        key={comment.id}
                        commentId={comment.id}
                        handleDeleteComment={() => this.props.deleteComment(comment.id)}
                        commentType={comment.commentType}
                        commentText={comment.commentText}
                        commentSuggestions={comment.commentSuggestions}
                    />
                ))
            }
            <AddCommentBox addComment={this.props.addComment} />
          </div>
      );
  }
}

Comments.propTypes = {
  fetchComments: PropTypes.func.isRequired,
  deleteComment: PropTypes.func.isRequired,
  addComment: PropTypes.func.isRequired,
  comments: PropTypes.array,
};

Comments.defaultProps = {
  comments: [],
};

const mapStateToProps = (state) => ({
    comments: state.essayComments.comments
});

const mapDispatchToProps = { addComment, fetchComments, deleteComment };

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
