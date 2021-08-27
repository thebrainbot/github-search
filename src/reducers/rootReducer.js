import { combineReducers } from 'redux';
import searchReducers from '../modules/search/actions/reducers';

const rootReducer = combineReducers({
  searchReducers,
});

export default rootReducer;
