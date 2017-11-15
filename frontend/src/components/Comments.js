import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import Comment from './Comment';

class Comments extends Component {
  componentDidMount = () =>
    this.props.actions.getAllCommentsForPost(this.props.postId);

  componentWillMount = () =>
    this.props.actions.emptyCommentsForPost();

  deleteComment = (event) => {
    var id = event.target.value;
    this.props.actions.deleteCommentForPost(id);
  }

  downVoteComment = (event) => {
    const id = event.target.value;
    this.props.actions.downVoteCommentForPost(id);
  }

  upVoteComment = (event) => {
    const id = event.target.value;
    this.props.actions.upVoteCommentForPost(id);
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
          <div>
            {listComments.map(id => (
              <Comment
                key={id}
                comment={comments[id]}
              />
            ))}
          </div>
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