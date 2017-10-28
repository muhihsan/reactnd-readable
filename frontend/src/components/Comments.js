import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import Comment from './Comment';

class Comments extends Component {
  componentWillMount = () => {
    this.props.actions.emptyCommentsForPost();
  }

  componentDidMount = () => {
    this.props.actions.getAllCommentsForPost(this.props.postId);
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
      } } = this.props;

    return (
      <div>
        {listComments && (
          <ul>
            {listComments.map(id => (<Comment key={id} comment={comments[id]} />))}
          </ul>
        )}
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

export default connect(mapStateToProps, mapDispatchToProps)(Comments);