import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import uuidv4 from 'uuid/v4';
import * as postActions from '../actions/postAction'
import PostForm from './PostForm';

class CreatePost extends Component {
  createPost = (post) => {
    this.props.actions.createPost({
      ...post,
      id: uuidv4()
    });
  }
  
  render = () => {
    return (
      <PostForm post={null} onPostSubmit={this.createPost} submitPostLabel='Create post' />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreatePost));