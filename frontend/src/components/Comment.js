import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import { Card, CardActions, CardText } from 'material-ui/Card';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';

class Comment extends Component {
  deleteComment = () => {
    this.props.actions.deleteCommentForPost(this.props.comment.id);
  }

  upVoteComment = () => {
    this.props.actions.upVoteCommentForPost(this.props.comment.id);
  }

  downVoteComment = () => {
    this.props.actions.downVoteCommentForPost(this.props.comment.id);
  }

  render = () => {
    const { comment } = this.props;
    
    return(
      <div>
        <Card>
        <CardActions>
            <i className="material-icons">person</i>
            <span>{comment.author}</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Upvote post"
              onClick={this.upVoteComment}
            >
              thumb_up
            </IconButton>
            <IconButton
              iconClassName="material-icons"
              tooltip="Downvote post"
              onClick={this.downVoteComment}
            >
              thumb_down
            </IconButton>
            <span>{comment.voteScore} Votes</span>
            <i className="material-icons">query_builder</i>
            <span>{comment.timestamp}</span>
            <IconButton
              iconClassName="material-icons"
              tooltip="Edit comment"
              onClick={this.deleteComment}
            >
              edit
            </IconButton>
            <IconButton
              iconClassName="material-icons"
              tooltip="Delete comment"
              onClick={this.deleteComment}
            >
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

export default connect(mapStateToProps, mapDispatchToProps)(Comment);