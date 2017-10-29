import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import * as postActions from '../actions/postAction';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import Comments from './Comments';

class PostDetails extends Component {
  componentWillMount = () => {
    this.props.actions.emptyPost();
    this.props.actions.emptyCommentsForPost();
  }

  componentDidMount = () => {
    this.props.actions.getPost(this.props.id);
    this.props.actions.getAllCommentsForPost(this.props.postId);
  }

  goToCreateComment = () => {
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}/comment/create`);
  }

  deletePost = () => {
    this.props.actions.deletePost(this.props.id);
  }

  upVotePost = () => {
    this.props.actions.upVotePost(this.props.id);
  }

  downVotePost = () => {
    this.props.actions.downVotePost(this.props.id);
  }

  render = () => {
    const { 
      post,
      comments: {
        result: listComments
      } } = this.props;

    const style = {
      margin: 0,
      top: 'auto',
      right: 24,
      left: 'auto',
      float: 'right',
    };

    return (
      <div>
        {post && post.id && (
          <div>
            <div>
              <Card>
                <CardHeader
                  avatar={<i className="material-icons md-48">account_circle</i>}
                  title={post.title}
                  subtitle={post.category}
                  expandable={false}
                  actAsExpander={false}
                >
                  <RaisedButton label="Create comment" primary={true} style={style} onClick={this.goToCreateComment} />
                </CardHeader>
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
                    onClick={this.downVotePost}
                  >
                    thumb_down
                  </IconButton>
                  <span>{post.voteScore} Votes</span>
                  <i className="material-icons">question_answer</i>
                  <span>{listComments.length} Comments</span>
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
                <Divider />
                <CardText>{post.body}</CardText>
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