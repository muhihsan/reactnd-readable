import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as commentActions from '../actions/commentAction'
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Card, { CardContent } from 'material-ui/Card';

class CommentForm extends Component {
  state = {
    body: this.props.parentComment ? this.props.parentComment.body : '',
    author: this.props.parentComment ? this.props.parentComment.author : '',
    timestamp: this.props.parentComment ? this.props.parentComment.timestamp : ''
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

  submitComment = () =>
    this.props.onCommentSubmit({
      body: this.state.body,
      author: this.state.author
    });

  cancelPostingComment = () =>
    this.props.history.goBack();

  handleTextFieldChange = (name) => (event) =>
    this.setState({ [name]: event.target.value });

  render = () => {
    const { author, body } = this.state;
    const { submitCommentLabel } = this.props;

    return (
      <div>
        <br />
        <Card>
          <CardContent>
            <TextField
              placeholder="Add author"
              label="Author"
              onChange={this.handleTextFieldChange('author')}
              value={author}
              fullWidth={true}
            /><br />
            <TextField
              placeholder="Add Body"
              label="Body"
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
                title={submitCommentLabel}
                primary={true}
                color="primary"
                onClick={this.submitComment}
              >
                {submitCommentLabel}
              </Button>
              <Button
                raised
                title=""
                secondary={true}
                onClick={this.cancelPostingComment}
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