import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import * as postActions from '../actions/postAction';
import Categories from './Categories';
import Posts from './Posts';
import CreatePost from './CreatePost';
import logo from '../icons/logo.svg';

class Home extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCategories();
    this.props.actions.getAllPosts();
  }

  deletePost = (event) => {   
    const id = event.target.value;
    this.props.actions.deletePost(id);
  }  

  render = () => {
    return(
      <div>
        <Categories />
        <Posts />
        <CreatePost />
      </div>
    );
  };
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...categoryActions,
      ...postActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);