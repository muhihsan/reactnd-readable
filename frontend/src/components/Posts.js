import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class Posts extends Component {
  render = () => {
    const {
      posts: {
        entities: posts,
        result: listPosts,
        totalComments
      }
    } = this.props;
    
    return (
      <div>
        {listPosts && listPosts.length > 0 && (
          <div>
            {listPosts.map(id =>
              <Post key={id} post={posts[id]} totalComment={totalComments[id]} />
            )}
          </div>
        )}
        {(!listPosts || listPosts === 0) && (
          <div>List of posts for category will be here</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Posts);