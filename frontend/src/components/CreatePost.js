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
import RaisedButton from 'material-ui/RaisedButton';

class CreateNewPost extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }

  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  createPost = () => {
    const post = {
      id: uuidv4(),
      timestamp: Date.now(),
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    };
    this.props.actions.createPost(post);
  }

  handleSelectFieldChange = (event, index, value) =>
    this.setState({ category: value });

  handleTextFieldChange = (event, value) =>
    this.setState({ [event.target.name]: value });

  render = () => {
    const { title, author, body, category } = this.state;
    const { categories: { entities: categories, result: listCategory } } = this.props;

    return (
      <div>
        <TextField
          hintText="Add title"
          floatingLabelText="Title"
          name="title"
          onChange={this.handleTextFieldChange}
          value={title}
        /><br />
        <TextField
          hintText="Add author"
          floatingLabelText="Author"
          name="author"
          onChange={this.handleTextFieldChange}
          value={author}
        /><br />
        <TextField
          hintText="Add body"
          floatingLabelText="body"
          multiLine={true}
          name="body"
          onChange={this.handleTextFieldChange}
          value={body}
        /><br />
        <SelectField
          hintText="Add category"
          floatingLabelText="Category"
          value={category}
          onChange={this.handleSelectFieldChange}
        >
          {listCategory.map(key => <MenuItem key={key} value={categories[key].path} primaryText={categories[key].name} />)}
        </SelectField><br />
        <RaisedButton label="Create post" primary={true} onClick={this.createPost}/>
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