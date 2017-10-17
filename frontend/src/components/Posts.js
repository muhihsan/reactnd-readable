import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postActions from '../actions/postAction';

class Posts extends Component {
  render = () => {
    const { 
      posts: { 
        entities: posts, 
        result: listPosts 
      }
    } = this.props;

    return(
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

export default connect(mapStateToProps, mapDispatchToProps)(Posts);