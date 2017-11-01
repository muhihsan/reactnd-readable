import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction'
import PostForm from './PostForm';

class EditPost extends Component {
  componentDidMount = () => {
    this.props.actions.getPost(this.props.category, this.props.id);
  }

  editPost = (post) => {
    this.props.actions.editPost({
      ...post,
      id: this.props.post.id
    });
  }

  render = () => {
    const { post } = this.props;

    return (
      <PostForm post={post} onPostSubmit={this.editPost} submitPostLabel='Edit post' />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps,
  id: ownProps.match.params.id,
  category: ownProps.match.params.category
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);