import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as postActions from '../actions/postAction';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Posts from './Posts';

class Home extends Component {
  componentDidMount = () => {
    this.props.actions.getAllPostsThenComments();
  }

  goToCreatePost = () => {
    this.props.history.push('post/create');
  }

  render = () => {
    const { posts } = this.props;

    const style = {
      margin: 0,
      top: 'auto',
      right: 24,
      bottom: 24,
      left: 'auto',
      position: 'fixed',
    };

    return (
      <div>
        <Posts posts={posts} />
        <FloatingActionButton style={style} title="Create post" onClick={this.goToCreatePost}>
          <ContentAdd />
        </FloatingActionButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);