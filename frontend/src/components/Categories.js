import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import * as categoryActions from '../actions/categoryAction';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import ActionLabel from 'material-ui/svg-icons/action/label';

class Categories extends Component {
  componentDidMount = () =>
    this.props.actions.getAllCategories();

  goToCategoryPosts = (event) => {
    event.preventDefault();
    this.props.history.push(`/${event.target.parentElement.parentElement.dataset.value}`);
    this.props.onCategoryClick();
  }

  toUpperCase = (word) =>
    word.charAt(0).toUpperCase() + word.substr(1);

  render = () => {
    const {
      categories: {
        result: listCategories
      }
    } = this.props;

    return (
      <List
        onChange={this.goToCategoryPosts}
      >
        <Subheader>
          Categories
        </Subheader>
        {listCategories && listCategories.length > 0 && (
          listCategories.map(name =>
            <ListItem
              key={name}
              component="a"
              href={`/${name}`}
              data-value={name}
              onClick={this.goToCategoryPosts}
              leftIcon={
                <ActionLabel />
              }
            >
              {this.toUpperCase(name)}
            </ListItem>
          )
      )}
      </List>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({
      ...categoryActions
    },
    dispatch
  )
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories));