import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';
import Posts from './Posts';
import CreatePostButton from './CreatePostButton';

class Home extends Component {
  componentDidMount = () =>
    this.props.actions.getAllPostsThenComments();

  goToCreatePost = () =>
    this.props.history.push('post/create');

  render = () => {
    const { posts } = this.props;

    return (
      <div>
        <Posts
          posts={posts}
        />
        <CreatePostButton
          onButtonClick={this.goToCreatePost}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);