import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import { FormControl } from 'material-ui/Form';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import Select from 'material-ui/Select';
import { MenuItem, MenuList } from 'material-ui/Menu';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: this.props.category ? this.props.category : '',
    timestamp: ''
  }

  componentDidMount = () =>
    this.props.actions.getAllCategories();

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.post) {
      this.setState({
        title: nextProps.post.title,
        body: nextProps.post.body,
        author: nextProps.post.author,
        category: nextProps.post.category,
        timestamp: nextProps.post.timestamp
      });
    }
  }

  submitPost = () =>
    this.props.onPostSubmit({
      title: this.state.title,
      body: this.state.body,
      author: this.state.author,
      category: this.state.category
    });

  cancelPostingForm = () =>
    this.props.history.goBack();

  handleSelectFieldChange = (event) =>
    this.setState({ category: event.target.value });

  handleTextFieldChange = (name) => (event) =>
    this.setState({ [name]: event.target.value });

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
        <br />
        <Card>
          <CardContent>
            <TextField
              placeholder="Add title"
              label="Title"
              onChange={this.handleTextFieldChange('title')}
              value={title}
              fullWidth={true}
            /><br />
            <div>
              <div
                className="left"
              >
                <TextField
                  placeholder="Add author"
                  label="Author"
                  onChange={this.handleTextFieldChange('author')}
                  value={author}
                  fullWidth={true}
                />
              </div>
              <div
                className="right"
              >
                <FormControl>
                  <InputLabel htmlFor="add-category">Category</InputLabel>
                  <Select
                    placeholder="Add category"
                    value={category}
                    onChange={this.handleSelectFieldChange}
                    fullWidth={true}
                    input={
                      <Input
                        id="add-category"
                      />
                    }
                  >
                    {listCategory.map(key =>
                      <MenuItem
                        key={key}
                        value={categories[key].path}
                      >
                        {categories[key].name}
                      </MenuItem>
                    )}
                  </Select>
                </FormControl>
              </div>
            </div>
            <br />
            <TextField
              placeholder="Add body"
              label="Body"
              multiline
              onChange={this.handleTextFieldChange('body')}
              value={body}
              fullWidth={true}
            /><br /><br />
            <div
              className="align-right"
            >
              <Button
                raised
                className="submit"
                title={submitPostLabel}
                color="primary"
                onClick={this.submitPost}
              >
                {submitPostLabel}
              </Button>
              <Button
                raised
                title="Cancel"
                onClick={this.cancelPostingForm}
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
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