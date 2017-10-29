import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';
import { Card, CardActions, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Post extends Component {
  goToPost = () => {
    this.props.history.push(`/${this.props.post.category}/${this.props.post.id}`);
  }

  deletePost = () => {
    this.props.actions.deletePost(this.props.post.id);
  }

  render = () => {
    const { post } = this.props;

    return (
      <div>
        <Card onClick={this.goToPost}>
          <CardHeader
            title={post.title}
            subtitle={post.category}
          />
          <Divider />
          <CardActions>
            <span>{post.author}</span>
            <i className="material-icons" title="Upvote post">thumb_up</i>
            <i className="material-icons" title="Downvote post">thumb_down</i>
            <i className="material-icons" title="Edit post">mode_edit</i>
            <i className="material-icons" title="Delete post" onClick={this.deletePost}>delete</i>
          </CardActions>
          {/* <Link to={`/${posts[id].category}/${id}`}>{posts[id].title}</Link>
          <button value={id} onClick={this.deletePost}>Delete</button> */}
        </Card>
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...state,
    ...ownProps
  };
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post));