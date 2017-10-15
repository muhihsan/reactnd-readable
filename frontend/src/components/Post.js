import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../actions/postAction';
import * as commentActions from '../actions/commentAction';
import CreateComment from './CreateComment';

class Post extends Component {
  componentDidMount = () => {
    this.props.actions.getPost(this.props.id);
    this.props.actions.getAllCommentsForPost(this.props.id);
  }

  deleteComment = (event) => {
    var id = event.target.value;
    console.log(id);
  }

  render = () => {
    const { 
      post, 
      comments: {
        entities: comments, 
        result: listComments
      }
    } = this.props;

    return(
      <div>
        {post && (
          <div>
            <div>
              <div>Id: {post.id}</div>
              <div>Timespan: {post.timespan}</div>
              <div>Title: {post.title}</div>
              <div>Body: {post.body}</div>
              <div>Author: {post.author}</div>
            </div>
            <div><CreateComment postId={this.props.id} /></div>
            {listComments && (
              <ul>
                {listComments.map(id => (
                  <li key={id}>{comments[id].body}<button value={id} onClick={this.deleteComment}>Delete</button></li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    id: ownProps.match.params.id
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions,
      ...commentActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Post);