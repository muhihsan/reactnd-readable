import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import categories from './categoryReducer';

const rootReducer = combineReducers({
  router: routerReducer,
  categories
});

export default rootReducer;