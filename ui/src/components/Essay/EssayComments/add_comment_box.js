import React from 'react';
import PropTypes from 'prop-types';
import CommentTextBox from './comment_text_box';

export default class AddCommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleCommentTypeChange = this.handleCommentTypeChange.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.state = {
            commentType: '',
            commentText: ''
        };
    }

    handleTextChange(event) {
        this.setState({ commentText: event.target.value });
    }

    handleCommentTypeChange(event) {
        this.setState({ commentType: event.target.value });
    }

    handleAddComment(event) {
        event.preventDefault()
        this.props.addComment({ commentText: this.state.commentText, commentType: this.state.commentType })
    }

    render() {
        const submitDisabled = this.state.commentType === '';
        return (
            <div className="input-comment-container add-comment-box">
                <h3>Add New Comment</h3>
                <form onSubmit={this.handleAddComment}>
                    <label>Comment Type</label>
                    <select
                        onMouseDown={this.handleCommentTypeChange}
                    >
                        <option value="">
                            {' '}
                            Select A Comment To Add
                            {' '}
                        </option>
                        <option value="Thesis">
                            {' '}
                            Thesis Comment
                            {' '}
                        </option>
                        <option value="Argument">
                            {' '}
                            Argument Comment
                            {' '}
                        </option>
                    </select>
                    <textarea data-testid="add-comment-text" value={this.state.commentText} className="input-comment" onChange={this.handleTextChange} />
                    <span className="add-comment">
                        <input type="submit" value="Add Comment" disabled={submitDisabled} className={`add-comment-button ${submitDisabled ? 'disabled' : ''}`} />
                    </span>
            </form>
         </div>
        );
    }
}

AddCommentBox.propTypes = {
    addComment: PropTypes.func.isRequired
}