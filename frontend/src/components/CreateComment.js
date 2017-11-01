import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import uuidv4 from 'uuid/v4';
import * as commentActions from '../actions/commentAction'
import CommentForm from './CommentForm';

class CreateComment extends Component {
  createComment = (comment) => {
    this.props.actions.createCommentForPost({
      id: uuidv4(),
      parentId: this.props.postId,
      ...comment
    }, this.props.category);
  }

  render = () => {
    return (
      <CommentForm onCommentSubmit={this.createComment} submitCommentLabel='Create comment' />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    postId: ownProps.match.params.id,
    category: ownProps.match.params.category,
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