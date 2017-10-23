import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';

class Comments extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCommentsForPost(this.props.id);
  }

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
    const {
      comments: {
        entities: comments, 
        result: listComments
      }} = this.props;

    return(
      <div>
        {listComments && (
            <ul>
              {listComments.map(id => (
                <li key={id}>
                  <div>Id: {comments[id].id}</div>
                  <div>Timespan: {comments[id].timestamp}</div>
                  <div>Body: {comments[id].body}</div>
                  <div>Author: {comments[id].author}</div>
                  <div>VoteScore: {comments[id].voteScore}</div>
                  <div>
                    {comments[id].body}
                    <button value={id} onClick={this.deleteComment}>Delete</button>
                    <button value={id} onClick={this.upVoteComment}>Upvote</button>
                    <button value={id} onClick={this.downVoteComment}>Downvote</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...commentActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Comments);