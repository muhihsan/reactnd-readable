import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import Comments from './Comments';
import CreateComment from './CreateComment';

class PostDetails extends Component {
  componentWillMount = () => {
    this.props.actions.emptyPost();
  }

  componentDidMount = () => {
    this.props.actions.getPost(this.props.id);
  }

  deletePost = (event) => {
    var id = event.target.value;
    this.props.actions.deletePost(id);
  }

  upVotePost = () => {
    this.props.actions.upVotePost(this.props.id);
  }

  downVotePost = () => {
    this.props.actions.downVotePost(this.props.id);
  }

  render = () => {
    const { post } = this.props;

    return (
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
            <CreateComment postId={post.id} />
            <Comments postId={post.id} />
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
      ...postActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);