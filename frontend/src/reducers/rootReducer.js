import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categoriesReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories,
  posts
});

export default rootReducer;