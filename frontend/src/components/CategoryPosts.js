import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Posts from './Posts';

class CategoryPosts extends Component {
  componentDidMount = () => {
    this.props.actions.getAllPostsForCategoryThenComments(this.props.category);
  }

  componentWillReceiveProps = (nextProps) => {
    if (this.props.category !== nextProps.category){
      this.props.actions.getAllPostsForCategoryThenComments(nextProps.category);
    }
  }

  goToCreatePost = () => {
    this.props.history.push(`${this.props.category}/post/create`);
  }

  render = () => {
    const { posts } = this.props;

    const style = {
      margin: 0,
      top: 'auto',
      right: 24,
      bottom: 24,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div>
        <Posts posts={posts} />
        <FloatingActionButton style={style} title="Create post" onClick={this.goToCreatePost}>
          <ContentAdd />
        </FloatingActionButton>
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