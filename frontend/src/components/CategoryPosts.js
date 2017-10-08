import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';

class CategoryPosts extends Component {
  componentDidMount = () => {
    this.props.actions.getAllPostsForCategory('react');
  }

  render = () => {
    return(
      <div>List of posts for category will be here</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPosts);