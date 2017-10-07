import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categoryReducer';
import posts from './postReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories,
  posts
});

export default rootReducer;