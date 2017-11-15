import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import Posts from './Posts';
import CreatePostButton from './CreatePostButton';

class CategoryPosts extends Component {
  componentDidMount = () =>
    this.props.actions.getAllPostsForCategoryThenComments(this.props.category);

  componentWillReceiveProps = (nextProps) => {
    if (this.props.category !== nextProps.category){
      this.props.actions.getAllPostsForCategoryThenComments(nextProps.category);
    }
  }

  goToCreatePost = () =>
    this.props.history.push(`${this.props.category}/post/create`);

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

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    category: ownProps.match.params.category
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPosts);