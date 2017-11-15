import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction'
import CommentForm from './CommentForm';

class CreateComment extends Component {
  componentDidMount = () =>
    this.props.actions.getComment(this.props.commentId);

  editComment = (comment) =>
    this.props.actions.editCommentForPost({
      id: this.props.comment.id,
      parentId: this.props.comment.parentId,
      ...comment
    }, this.props.category);

  render = () => {
    const { comment } = this.props;

    return (
      <div>
        {comment && (
          <CommentForm
            parentComment={comment}
            onCommentSubmit={this.editComment}
            submitCommentLabel='Edit comment'
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    category: ownProps.match.params.category,
    commentId: ownProps.match.params.commentId,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...commentActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateComment));