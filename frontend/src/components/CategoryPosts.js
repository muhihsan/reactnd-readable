import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import Posts from './Posts';

class CategoryPosts extends Component {
  componentDidMount = () => {
    this.props.actions.getAllPostsForCategory(this.props.category);
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.category !== nextProps.category){
      this.props.actions.getAllPostsForCategory(nextProps.category);
    }
  }

  render = () => {
    const { posts } = this.props;
    return (
      <Posts posts={posts} />
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