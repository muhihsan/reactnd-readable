import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import * as postActions from '../actions/postAction';
import CreatePost from './CreatePost';
import logo from '../icons/logo.svg';

class Home extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCategories();
    this.props.actions.getAllPosts();
  }

  deletePost = e => {   
    const id = e.target.value;
    this.props.actions.deletePost(id);
  }  

  render = () => {
    const { 
      posts: { 
        entities: posts, 
        result: listPosts 
      },
      categories: {
        entities: categories,
        result: listCategories
      }
    } = this.props;

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          {listCategories && listCategories.length > 0 && (
            <ul>
              {listCategories.map(name => 
                <li key={name}>
                  <Link to={`/${name}/posts/`}>{categories[name].name}</Link>
                </li>
              )}
            </ul>
          )}
          {(!listCategories || listCategories === 0) && (
            <div>List of posts for category will be here</div>
          )}
        </div>
        <div className="App-intro">
          {listPosts && listPosts.length > 0 && (
            <ul>
              {listPosts.map(id => 
                <li key={id}>
                  <Link to={`/posts/${id}`}>{posts[id].title}</Link>
                  <button value={id} onClick={this.deletePost}>Delete</button>
                </li>
              )}
            </ul>
          )}
          {(!listPosts || listPosts === 0) && (
            <div>List of posts for category will be here</div>
          )}
        </div>
        <div className="App-intro">
          <CreatePost />
        </div>
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