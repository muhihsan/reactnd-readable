import React, { Component } from 'react';
import { connect } from 'react-redux';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Post from './Post';

class Posts extends Component {
  state = {
    filter: '',
    open: false,
    selectedFilter: 'Date',
    sortBy: 'timestamp',
    listPosts: this.props.posts ? this.props.posts.result : []
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.posts) {
      this.sortPosts(nextProps.posts, this.state.sortBy);
    }
  }

  changeFilter = (event, sortBy) => {
    this.setState({ sortBy });
    this.sortPosts(this.props.posts, sortBy);
  }

  selectFilter = (event) => {
    this.setState({
      open: false,
      selectedFilter: event.target.innerText
    });
  }

  sortPosts = (posts, sortBy) => {
    var sortedListPosts = posts.result.slice().sort((a, b) => {
      if (posts.entities[a][sortBy] < posts.entities[b][sortBy]) {
        return -1;
      }
      if (posts.entities[a][sortBy] > posts.entities[b][sortBy]) {
        return 1;
      }
      return 0;
    });
    this.setState({ listPosts: sortedListPosts })
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render = () => {
    const {
      posts: {
        entities: posts,
      totalComments
      }
    } = this.props;

    const { listPosts, selectedFilter } = this.state;

    return (
      <div>
        <FlatButton
          onClick={this.handleTouchTap}
          label={this.state.selectedFilter}
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu onChange={this.changeFilter}>
            <MenuItem
              primaryText="Author"
              value="author"
              insetChildren={true}
              checked={selectedFilter === 'Author'}
              onClick={this.selectFilter}
            />
            <MenuItem
              primaryText="Date"
              value="timestamp"
              insetChildren={true}
              checked={selectedFilter === 'Date'}
              onClick={this.selectFilter}
            />
            <MenuItem
              primaryText="Score"
              value="voteScore"
              insetChildren={true}
              checked={selectedFilter === 'Score'}
              onClick={this.selectFilter}
            />
          </Menu>
        </Popover>
        {listPosts && listPosts.length > 0 && (
          <div>
            {listPosts.map(id =>
              <Post key={id} post={posts[id]} totalComment={totalComments[id]} />
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

export default connect(mapStateToProps)(Posts);