import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers/rootReducer';

export default (history) => {
  return createStore(
    rootReducer,
    applyMiddleware(routerMiddleware(history))
  );
};