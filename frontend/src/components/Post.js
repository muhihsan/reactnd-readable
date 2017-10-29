import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

class Post extends Component {
  goToPost = () => {
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`);
  }

  deletePost = () => {
    this.props.actions.deletePost(this.props.post.id);
  }
  
  upVotePost = () => {
    this.props.actions.upVotePost(this.props.post.id);
  }

  downVotePost = () => {
    this.props.actions.downVotePost(this.props.post.id);
  }

  render = () => {
    const { post, totalComment } = this.props;

    return (
      <div>
        <Card>
          <CardHeader
            avatar={<i className="material-icons md-48">account_circle</i>}
            title={post.title}
            subtitle={post.category}
            onClick={this.goToPost}
          />
          <Divider />
          <CardActions>
            <i className="material-icons">person</i>
            <span>{post.author}</span>
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
              onClick={this.upVotePost}
            >
              thumb_down
            </IconButton>
            <span>{post.voteScore} Votes</span>
            <i className="material-icons">question_answer</i>
            <span>{totalComment} Comments</span>
            <i className="material-icons">query_builder</i>
            <span>{post.timestamp}</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Edit post"
              onClick={this.deletePost}
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