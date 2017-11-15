import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categoriesReducer';
import comment from './commentReducer';
import comments from './commentsReducer';
import isLoading from './loadingReducer';
import post from './postReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories,
  comment,
  comments,
  isLoading,
  post,
  posts
});

export default rootReducer;