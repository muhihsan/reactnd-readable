import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as postActions from '../actions/postAction';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Divider from 'material-ui/Divider';

class Posts extends Component {
  componentDidMount = () => {
    this.props.actions.getAllPosts();
  }

  deletePost = (event) => {
    const id = event.target.value;
    this.props.actions.deletePost(id);
  }

  render = () => {
    const {
      posts: {
        entities: posts,
        result: listPosts
      }
    } = this.props;

    return (
      <div>
        {listPosts && listPosts.length > 0 && (
          <div>
            {listPosts.map(id =>
              <div key={id}>
                <Card>
                  <CardHeader
                    title={posts[id].title}
                    subtitle={posts[id].category}
                  />
                  <Divider />
                  <CardActions>
                    <span>{posts[id].author}</span>
                    <i className="material-icons">thumb_up</i>
                    <i className="material-icons">thumb_down</i>
                    <i className="material-icons">mode_edit</i>
                    <i className="material-icons">delete</i>
                  </CardActions>
                  {/* <Link to={`/${posts[id].category}/${id}`}>{posts[id].title}</Link>
                  <button value={id} onClick={this.deletePost}>Delete</button> */}
                </Card>
                <br />
              </div>
            )}
          </div>
        )}
        {(!listPosts || listPosts === 0) && (
          <div>List of posts for category will be here</div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...postActions
    },
    dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(Posts);