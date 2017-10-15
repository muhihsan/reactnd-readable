import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import * as commentActions from '../actions/commentAction'

class CreateComment extends Component {
  createNewPost = () => {
    const comment = {
      id: uuidv4(),
      parentId: this.props.postId,
      timestamp: Date.now(),
      body: this.body.value,
      author: this.author.value
    };
    this.props.actions.createCommentForPost(comment);
  }

  static contextTypes = {
    router: PropTypes.object
  }

  render = () => {
    return(
      <div>
        CreateNewComment
        <div>Body <input type="text"  ref={node => this.body = node} /></div>
        <div>Author <input type="text"  ref={node => this.author = node} /></div>
        <div>
          <button onClick={this.createNewPost}>Create New Comment</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...commentActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateComment);