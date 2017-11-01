import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as commentActions from '../actions/commentAction'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class CreateComment extends Component {
  state = {
    body: '',
    author: ''
  }

  componentDidMount = () => {
    this.props.actions.getComment(this.props.commentId);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.comment !== null) {
      this.setState({
        body: nextProps.comment.body,
        author: nextProps.comment.author
      });
    }
  }

  editComment = () => {
    const comment = {
      id: this.props.comment.id,
      parentId: this.props.comment.parentId,
      timestamp: Date.now(),
      body: this.state.body,
      author: this.state.author
    };
    this.props.actions.editCommentForPost(comment, this.props.category);
  }

  cancelEditComment = () => {
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
          <RaisedButton label="Edit comment" primary={true} onClick={this.editComment}/>
          <RaisedButton label="Cancel" secondary={true} onClick={this.cancelEditComment}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    postId: ownProps.match.params.id,
    category: ownProps.match.params.category,
    commentId: ownProps.match.params.commentId,
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