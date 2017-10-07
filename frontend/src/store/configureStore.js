import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

export default (history) => {
  return createStore(
    rootReducer,
    applyMiddleware(thunk, routerMiddleware(history))
  );
};