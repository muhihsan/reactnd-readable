import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'material-ui/Button';
// import Popover from 'material-ui/Popover';
import Menu, { MenuItem } from 'material-ui/Menu';
import IconButton from 'material-ui/IconButton';
import Post from './Post';
import { ArrowUpward, ArrowDownward } from 'material-ui-icons';

class Posts extends Component {
  state = {
    filter: '',
    open: false,
    selectedFilter: 'Date',
    sortBy: 'timestamp',
    isAscendingSort: false,
    listPosts: this.props.posts ? this.props.posts.result : []
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.posts) {
      this.sortPosts(nextProps.posts, this.state.sortBy, this.state.isAscendingSort);
    }
  }

  selectFilter = (event) =>
    this.setState({
      open: false,
      selectedFilter: event.target.innerText,
      sortBy: event.target.dataset.value
    }, () =>
      this.sortPosts(this.props.posts, this.state.sortBy, this.state.isAscendingSort)
    );

  reverseSortDirection = () =>
    this.setState({ isAscendingSort: !this.state.isAscendingSort }, () =>
      this.sortPosts(this.props.posts, this.state.sortBy, this.state.isAscendingSort)
    );

  sortPosts = (posts, sortBy, isAscendingSort) => {
    var sortedListPosts = posts.result.slice().sort((a, b) => {
      return isAscendingSort ? this.sortValues(posts, sortBy, a, b) : this.sortValues(posts, sortBy, b, a);
    });
    this.setState({ listPosts: sortedListPosts })
  }

  sortValues = (posts, sortBy, a, b) => {
    if (posts.entities[a][sortBy] < posts.entities[b][sortBy]) {
      return -1;
    }
    if (posts.entities[a][sortBy] > posts.entities[b][sortBy]) {
      return 1;
    }
    return 0;
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  }

  handleRequestClose = () =>
    this.setState({
      open: false,
    });

  render = () => {
    const {
      posts: {
        entities: posts,
      totalComments
      }
    } = this.props;

    const { listPosts, isAscendingSort, sortBy } = this.state;

    return (
      <div>
        <br />
        <div
          className="sort"
        >
          <Button
            onClick={this.handleTouchTap}
          >
            {this.state.selectedFilter}
          </Button>
          <Menu
            open={this.state.open}
            anchorEl={this.state.anchorEl}
            onRequestClose={this.handleRequestClose}
          >
            <MenuItem
              selected={sortBy === "author"}
              data-value="author"
              onClick={this.selectFilter}
            >
              Author
            </MenuItem>
            <MenuItem
              selected={sortBy === "timestamp"}
              data-value="timestamp"
              onClick={this.selectFilter}
            >
              Date
            </MenuItem>
            <MenuItem
              selected={sortBy === "voteScore"}
              data-value="voteScore"
              onClick={this.selectFilter}
            >
              Score
            </MenuItem>
          </Menu>
          <IconButton
            tooltip="Reverse sort direction"
            onClick={this.reverseSortDirection}
          >
            {isAscendingSort && <ArrowUpward />}
            {!isAscendingSort && <ArrowDownward />}
          </IconButton>
        </div>
        <br />
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