import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction';
import Comment from './Comment';

class Comments extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCommentsForPost(this.props.id);
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
      }} = this.props;

    return(
      <div>
        {listComments && (
            <ul>
              {listComments.map(id => (<Comment comment={comments[id]} />))}
            </ul>
          )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
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