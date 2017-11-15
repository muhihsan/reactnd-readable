import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';
import Card, { CardActions, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import { AccountCircle, Person, QueryBuilder, QuestionAnswer, ThumbUp, ThumbDown, Edit, Delete } from 'material-ui-icons';

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
            avatar={
              <AccountCircle
                classes={{
                  root: "material-icons md-48"
                }}
              />
            }
            title={post.title}
            subtitle={post.category}
            onClick={this.goToPost}
          />
          <Divider />
          <CardActions>
            <IconButton
              tooltip="Author"
            >
              <Person />
            </IconButton>
            <span>{post.author}</span>
            <IconButton
              tooltip="Time Created"
            >
              <QueryBuilder />
            </IconButton>
            <span>{new Date(post.timestamp).toDateString()}</span>
            <IconButton
              tooltip="Total Comments"
            >
              <QuestionAnswer />
            </IconButton>
            <span>{totalComment} Comments</span>
            <IconButton
              tooltip="Upvote post"
              onClick={this.upVotePost}
            >
              <ThumbUp />
            </IconButton>
            <IconButton
              tooltip="Downvote post"
              onClick={this.downVotePost}
            >
              <ThumbDown />
            </IconButton>
            <span>{post.voteScore} Votes</span>
            <IconButton
              tooltip="Edit post"
              onClick={this.editPost}
            >
              <Edit />
            </IconButton>
            <IconButton
              tooltip="Delete post"
              onClick={this.deletePost}
            >
              <Delete />
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