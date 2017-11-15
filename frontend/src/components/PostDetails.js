import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import * as postActions from '../actions/postAction';
import Card, { CardActions, CardHeader, CardContent } from 'material-ui/Card';
import { Person, QueryBuilder, QuestionAnswer, ThumbUp, ThumbDown, Edit, Delete } from 'material-ui-icons';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Avatar from 'material-ui/Avatar';
import Comments from './Comments';

class PostDetails extends Component {
  componentWillMount = () => {
    this.props.actions.emptyPost();
    this.props.actions.emptyCommentsForPost();
  }

  componentDidMount = () => {
    this.props.actions.getPost(this.props.category, this.props.id);
    this.props.actions.getAllCommentsForPost(this.props.id);
  }

  goToCreateComment = () =>
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}/comment/create`);

  deletePost = () =>
  this.props.actions.deletePost(this.props.id);

  editPost = () =>
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}/edit`);

  downVotePost = () =>
    this.props.actions.downVotePost(this.props.id);

  upVotePost = () =>
    this.props.actions.upVotePost(this.props.id);

  render = () => {
    const {
      post,
      comments: {
        result: listComments
      } } = this.props;

    const style = {
      margin: 0,
      top: 22,
      right: 22,
      left: 'auto',
      float: 'right',
    };

    return (
      <div>
        <br />
        {post && post.id && (
          <div>
            <div>
              <Card>
                <Button
                  raised
                  color="primary"
                  style={style}
                  onClick={this.goToCreateComment}
                >
                  Create comment
                </Button>
                <CardHeader
                  avatar={
                    <Avatar
                      aria-label={post.author}
                    >
                      {post.author[0].toUpperCase()}
                    </Avatar>
                  }
                  title={post.title}
                  subheader={post.category}
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
                  <span>{listComments.length} Comments</span>
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
                <Divider />
                <CardContent>{post.body}</CardContent>
              </Card>
              <br />
            </div>
            <Comments postId={post.id} />
          </div>
        )}
        {(!post || !post.id) && (
          <div>Post can't be found.</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    category: ownProps.match.params.category,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostDetails));