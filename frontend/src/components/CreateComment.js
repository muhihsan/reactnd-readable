import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import uuidv4 from 'uuid/v4';
import * as commentActions from '../actions/commentAction'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateComment extends Component {
  state = {
    body: '',
    author: ''
  }

  createComment = () => {
    const comment = {
      id: uuidv4(),
      parentId: this.props.postId,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author
    };
    this.props.actions.createCommentForPost(comment);
  }

  cancelCreateComment = () => {
    this.props.history.goBack();
  }

  handleTextFieldChange = (event, value) =>
    this.setState({ [event.target.name]: value });

  static contextTypes = {
    router: PropTypes.object
  }

  render = () => {
    const { author, body } = this.state;

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
          <RaisedButton label="Create comment" primary={true} onClick={this.createComment}/>
          <RaisedButton label="Cancel" secondary={true} onClick={this.cancelCreateComment}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    postId: ownProps.match.params.id,
    category: ownProps.match.params.id,
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateComment));