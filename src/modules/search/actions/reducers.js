import * as types from './types';
import initialState from '../../../reducers/initialState';

export default function (state = initialState.search, action) { // eslint-disable-line func-names
  switch (action.type) {
    case types.SEARCH_RESULTS:
      return {
        loading: false,
        error: null,
        ...action.search,
        query: state.query,
      };
    case types.SEARCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case types.SEARCH_CLEAR_RESULTS:
      return {
        ...initialState,
      };
    case types.SEARCH_START:
      return {
        ...state,
        query: action.query,
        loading: true,
      };
    default:
      return state;
  }
}
