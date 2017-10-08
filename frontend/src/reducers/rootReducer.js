import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categoriesReducer';
import comments from './commentsReducer';
import post from './postReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories,
  comments,
  post,
  posts
});

export default rootReducer;