import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import * as commentActions from '../actions/commentAction';
import CreateComment from './CreateComment';

class Post extends Component {
  componentDidMount = () => {
    this.props.actions.getPost(this.props.id);
    this.props.actions.getAllCommentsForPost(this.props.id);
  }

  deletePost = (event) => {
    var id = event.target.value;
    this.props.actions.deletePost(id);
  }

  deleteComment = (event) => {
    var id = event.target.value;
    this.props.actions.deleteCommentForPost(id);
  }

  upVotePost = () => {
    this.props.actions.upVotePost(this.props.id);
  }

  downVotePost = () => {
    this.props.actions.downVotePost(this.props.id);
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
      post, 
      comments: {
        entities: comments, 
        result: listComments
      }
    } = this.props;

    return(
      <div>
        {post && post.id && (
          <div>
            <div>
              <div>Id: {post.id}</div>
              <div>Timespan: {post.timestamp}</div>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>
              <div>Author: {post.author}</div>
              <div>VoteScore: {post.voteScore}</div>
              <div>
                <button value={post.id} onClick={this.deletePost}>Delete</button>
                <button onClick={this.upVotePost}>Upvote</button>
                <button onClick={this.downVotePost}>Downvote</button>
              </div>
            </div>
            <div><CreateComment postId={this.props.id} /></div>
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions,
      ...commentActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);