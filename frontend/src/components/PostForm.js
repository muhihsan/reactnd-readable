import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';

class PostForm extends Component {
  state = {
    title: '',
    body: '',
    author: '',
    category: this.props.category ? this.props.category : '',
    timestamp: ''
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
        timestamp: nextProps.post.timestamp
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
        <br />
        <Card>
          <CardText>
            <TextField
              hintText="Add title"
              floatingLabelText="Title"
              name="title"
              onChange={this.handleTextFieldChange}
              value={title}
              fullWidth={true}
            /><br />
            <div>
              <div className="left">
                <TextField
                  hintText="Add author"
                  floatingLabelText="Author"
                  name="author"
                  onChange={this.handleTextFieldChange}
                  value={author}
                  fullWidth={true}
                />
              </div>
              <div className="right">
                <SelectField
                  hintText="Add category"
                  floatingLabelText="Category"
                  value={category}
                  onChange={this.handleSelectFieldChange}
                  fullWidth={true}
                >
                  {listCategory.map(key => <MenuItem key={key} value={categories[key].path} primaryText={categories[key].name} />)}
                </SelectField>
              </div>
            </div>
            <br />
            <TextField
              hintText="Add body"
              floatingLabelText="Body"
              multiLine={true}
              name="body"
              onChange={this.handleTextFieldChange}
              value={body}
              fullWidth={true}
            /><br /><br />
            <div className="align-right">
              <RaisedButton className="submit" title={submitPostLabel} label={submitPostLabel} primary={true} onClick={this.submitPost}/>
              <RaisedButton label="Cancel" title="Cancel" secondary={true} onClick={this.cancelPostingForm}/>
            </div>
          </CardText>
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