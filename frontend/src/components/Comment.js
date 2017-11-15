import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import { Card, CardActions, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

class Comment extends Component {
  goToEditComment = () =>
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}/${this.props.comment.id}/edit`);

  deleteComment = () =>
    this.props.actions.deleteCommentForPost(this.props.comment.id);

  upVoteComment = () =>
    this.props.actions.upVoteCommentForPost(this.props.comment.id);

  downVoteComment = () =>
    this.props.actions.downVoteCommentForPost(this.props.comment.id);

  render = () => {
    const { comment } = this.props;

    return(
      <div>
        <Card>
          <CardActions>
            <IconButton iconClassName="material-icons" tooltip="Author">
              person
            </IconButton>
            <span>{comment.author}</span>
            <IconButton iconClassName="material-icons" tooltip="Time Created">
              query_builder
            </IconButton>
            <span>{new Date(comment.timestamp).toDateString()}</span>
            <IconButton iconClassName="material-icons" tooltip="Upvote post" onClick={this.upVoteComment}>
              thumb_up
            </IconButton>
            <IconButton iconClassName="material-icons" tooltip="Downvote post" onClick={this.downVoteComment}>
              thumb_down
            </IconButton>
            <span>{comment.voteScore} Votes</span>
            <IconButton iconClassName="material-icons" tooltip="Edit comment" onClick={this.goToEditComment}>
              edit
            </IconButton>
            <IconButton iconClassName="material-icons" tooltip="Delete comment" onClick={this.deleteComment}>
              delete
            </IconButton>
          </CardActions>
          <Divider />
          <CardText>{comment.body}</CardText>
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
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...commentActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Comment));