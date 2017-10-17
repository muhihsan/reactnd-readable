import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import * as postActions from '../actions/postAction';
import Categories from './Categories';
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
    const { 
      posts: { 
        entities: posts, 
        result: listPosts 
      }
    } = this.props;

    return(
      <div>
        <Categories />
        <div>
          {listPosts && listPosts.length > 0 && (
            <ul>
              {listPosts.map(id => 
                <li key={id}>
                  <Link to={`/${posts[id].category}/${id}`}>{posts[id].title}</Link>
                  <button value={id} onClick={this.deletePost}>Delete</button>
                </li>
              )}
            </ul>
          )}
          {(!listPosts || listPosts === 0) && (
            <div>List of posts for category will be here</div>
          )}
        </div>
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