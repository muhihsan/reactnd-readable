import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidv4 from 'uuid/v4';
import * as postActions from '../actions/postAction'

class CreateNewPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }

  createNewPost = () => {
    const post = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    };
    console.log(post);
  }

  render = () => {
    return(
      <div>
        CreateNewPost
        <div>
          <button onClick={this.createNewPost}>Create New Post</button>
        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);