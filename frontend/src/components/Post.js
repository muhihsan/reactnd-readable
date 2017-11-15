import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

class Post extends Component {
  goToPost = () =>
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`);

  deletePost = () =>
    this.props.actions.deletePost(this.props.post.id);

  downVotePost = () =>
    this.props.actions.downVotePost(this.props.post.id);

  editPost = () =>
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}/edit`)

  upVotePost = () =>
    this.props.actions.upVotePost(this.props.post.id);

  render = () => {
    const { post, totalComment } = this.props;

    return (
      <div>
        <Card>
          <CardHeader
            className="pointer"
            avatar={<i className="material-icons md-48">account_circle</i>}
            title={post.title}
            subtitle={post.category}
            onClick={this.goToPost}
          />
          <Divider />
          <CardActions>
            <IconButton
              iconClassName="material-icons"
              tooltip="Author"
            >
              person
            </IconButton>
            <span>{post.author}</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Time Created"
            >
              query_builder
            </IconButton>
            <span>{new Date(post.timestamp).toDateString()}</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Total Comments"
            >
              question_answer
            </IconButton>
            <span>{totalComment} Comments</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Upvote post"
              onClick={this.upVotePost}
            >
              thumb_up
            </IconButton>
            <IconButton
              iconClassName="material-icons"
              tooltip="Downvote post"
              onClick={this.downVotePost}
            >
              thumb_down
            </IconButton>
            <span>{post.voteScore} Votes</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Edit post"
              onClick={this.editPost}
            >
              edit
            </IconButton>
            <IconButton
              iconClassName="material-icons"
              tooltip="Delete post"
              onClick={this.deletePost}
            >
              delete
            </IconButton>
          </CardActions>
        </Card>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));