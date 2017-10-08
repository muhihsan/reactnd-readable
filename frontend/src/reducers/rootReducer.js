import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categoriesReducer';
import post from './postReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories,
  post,
  posts
});

export default rootReducer;