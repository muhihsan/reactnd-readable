import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';

class Comment extends Component {
  deleteComment = (event) => {
    var id = event.target.value;
    this.props.actions.deleteCommentForPost(id);
  }

  upVoteComment = (event) => {
    const id = event.target.value;
    this.props.actions.upVoteCommentForPost(id);
  }

  downVoteComment = (event) => {
    const id = event.target.value;
    this.props.actions.downVoteCommentForPost(id);
  }

  render = () => {
    const { comment } = this.props;
    
    return(
      <li key={comment.id}>
        <div>Id: {comment.id}</div>
        <div>Timespan: {comment.timestamp}</div>
        <div>Body: {comment.body}</div>
        <div>Author: {comment.author}</div>
        <div>VoteScore: {comment.voteScore}</div>
        <div>
          {comment.body}
          <button value={comment.id} onClick={this.deleteComment}>Delete</button>
          <button value={comment.id} onClick={this.upVoteComment}>Upvote</button>
          <button value={comment.id} onClick={this.downVoteComment}>Downvote</button>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
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

export default connect(mapStateToProps, mapDispatchToProps)(Comment);