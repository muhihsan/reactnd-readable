import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import * as categoryActions from '../actions/categoryAction';
import * as postActions from '../actions/postAction'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class CreateNewPost extends Component {
  state = {
    category: null
  }

  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  createPost = () => {
    const post = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.title.value,
      body: this.body.value,
      author: this.author.value,
      category: this.category.value
    };
    this.props.actions.createPost(post);
  }

  handleChange = (event, index, value) => this.setState({category: value});

  static contextTypes = {
    router: PropTypes.object
  }

  render = () => {
    const { category } = this.state;
    const { categories: { entities: categories, result: listCategory } } = this.props;

    return (
      <div>
        <TextField
          hintText="Add title"
          floatingLabelText="Title"
        /><br />
        <TextField
          hintText="Add author"
          floatingLabelText="Author"
        /><br />
        <TextField
          hintText="Add body"
          floatingLabelText="body"
          multiLine={true}
          rows={5}
        /><br />
        <SelectField
          hintText="Add category"
          floatingLabelText="Category"
          value={category}
          onChange={this.handleChange}
        >
          {listCategory.map(key => <MenuItem value={categories[key].path} primaryText={categories[key].name} />)}
        </SelectField>
        {/* <div>Title <input type="text" ref={node => this.title = node} /></div>
        <div>Body <input type="text" ref={node => this.body = node} /></div>
        <div>Author <input type="text" ref={node => this.author = node} /></div>
        <div>Category
          <select ref={node => this.category = node}>
            {listCategory.map(key => <option key={key} value={categories[key].path}>{categories[key].name}</option>)}
          </select>
        </div>
        <div>
          <button onClick={this.createPost}>Create New Post</button>
        </div> */}
      </div>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateNewPost);