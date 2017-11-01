import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: ''
  }

  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.post) {
      this.setState({
        title: nextProps.post.title,
        body: nextProps.post.body,
        author: nextProps.post.author,
        category: nextProps.post.category,
        timestamp: Date.now(),
      });
    }
  }

  submitPost = () => {
    this.props.onPostSubmit({
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    });
  }

  cancelPostingForm = () => {
    this.props.history.goBack();
  }

  handleSelectFieldChange = (event, index, value) =>
    this.setState({ category: value });

  handleTextFieldChange = (event, value) =>
    this.setState({ [event.target.name]: value });

  render = () => {
    const { title, author, body, category } = this.state;
    const {
      categories: {
        entities: categories,
        result: listCategory 
      },
      submitPostLabel
    } = this.props;

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
        <RaisedButton label={submitPostLabel} primary={true} onClick={this.submitPost}/>
        <RaisedButton label="Cancel" secondary={true} onClick={this.cancelPostingForm}/>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  ...state,
  ...ownProps
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...categoryActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm));