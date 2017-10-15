import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import * as commentActions from '../actions/commentAction';
import CreateComment from './CreateComment';

class Post extends Component {
  componentDidMount = () => {
    this.props.actions.getPost(this.props.id);
    this.props.actions.getAllCommentsForPost(this.props.id);
  }

  render = () => {
    const { post } = this.props;
    return(
      <div>
        {post && (
          <div>
            <div>
              <div>Id: {post.id}</div>
              <div>Timespan: {post.timespan}</div>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>
              <div>Author: {post.author}</div>
            </div>
            <div><CreateComment postId={this.props.id} /></div>
          </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Post);