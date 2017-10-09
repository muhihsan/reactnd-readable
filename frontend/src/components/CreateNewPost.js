import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuidv4 from 'uuid/v4';
import * as postActions from '../actions/postAction'

class CreateNewPost extends Component {
  createNewPost = () => {
    const post = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.title.value,
      body: this.body.value,
      author: this.author.value,
      category: this.category.value
    };
    console.log(post);
  }

  render = () => {
    const { categories: {entities: categories, result: listCategory} } = this.props;

    return(
      <div>
        CreateNewPost
        <div>Title <input type="text"  ref={node => this.title = node} /></div>
        <div>Body <input type="text"  ref={node => this.body = node} /></div>
        <div>Author <input type="text"  ref={node => this.author = node} /></div>
        <div>Category 
          <select ref={node => this.category = node}>
            {listCategory.map(key => <option key={key} value={categories[key].path}>{categories[key].name}</option>)}
          </select>
        </div>
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