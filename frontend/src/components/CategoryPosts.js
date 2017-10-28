import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';

class CategoryPosts extends Component {
  componentDidMount = () => {
    this.props.actions.getAllPostsForCategory(this.props.category);
  }

  render = () => {
    const { posts: { entities: posts, result: listPosts } } = this.props;
    return (
      <div>
        {listPosts && listPosts.length > 0 && (
          <ul>
            {listPosts.map(id => <ul key={id}>{posts[id].title}</ul>)}
          </ul>
        )}
        {(!listPosts || listPosts === 0) && (
          <div>List of posts for category will be here</div>
        )}
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