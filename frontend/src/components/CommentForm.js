import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CommentForm extends Component {
  state = {
    body: '',
    author: ''
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.parentComment) {
      this.setState({
        body: nextProps.parentComment.body,
        author: nextProps.parentComment.author,
        timestamp: nextProps.parentComment.author
      });
    }
  }

  submitComment = () => {
    this.props.onCommentSubmit({
      body: this.state.body,
      author: this.state.author
    });
  }

  cancelPostingComment = () => {
    this.props.history.goBack();
  }

  handleTextFieldChange = (event, value) =>
    this.setState({ [event.target.name]: value });

  render = () => {
    const { author, body } = this.state;
    const { submitCommentLabel } = this.props;

    return (
      <div>
        <TextField
          hintText="Add author"
          floatingLabelText="Author"
          name="author"
          onChange={this.handleTextFieldChange}
          value={author}
        /><br />
        <TextField
          hintText="Add Body"
          floatingLabelText="Body"
          name="body"
          onChange={this.handleTextFieldChange}
          value={body}
        /><br />
        <div>
          <RaisedButton label={submitCommentLabel} primary={true} onClick={this.submitComment}/>
          <RaisedButton label="Cancel" secondary={true} onClick={this.cancelPostingComment}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...commentActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CommentForm));