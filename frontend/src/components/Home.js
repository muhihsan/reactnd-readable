import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../actions/categoryAction';
import logo from '../icons/logo.svg';

class Home extends Component {
  componentDidMount = () => {
    this.props.actions.getAllCategories();
  }

  render = () => {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  };
}

const mapStateToProps = (state) => {  
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(categoryActions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);