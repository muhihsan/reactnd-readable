import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as categoryActions from '../actions/categoryAction';

class Categories extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  render = () => {
    const {
      categories: {
        entities: categories,
        result: listCategories
      }
    } = this.props;

    return(
      <div>
        {listCategories && listCategories.length > 0 && (
          <ul>
            {listCategories.map(name => 
              <li key={name}>
                <Link to={`/${name}/`}>{categories[name].name}</Link>
              </li>
            )}
          </ul>
        )}
        {(!listCategories || listCategories === 0) && (
          <div>List of posts for category will be here</div>
        )}
      </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Categories);