import client from '../../../client';
import * as types from './types';
import userSearchQuery from './queries';

export function setSearchResults({ search }) {
  return {
    type: types.SEARCH_RESULTS,
    search,
  };
}

export function setSearchError(error) {
  return {
    type: types.SEARCH_ERROR,
    error,
  };
}

export function clearSearchResults() {
  return {
    type: types.SEARCH_CLEAR_RESULTS,
  };
}

export function searchStart() {
  return {
    type: types.SEARCH_START,
  };
}

export function userSearch({
  query,
  resultsPerPage = 10,
}) {
  return client.query({
    query: userSearchQuery,
    variables: {
      query,
      amount: resultsPerPage,
    },
    fetchPolicy: 'network-only',
  });
}

export function runUserSearch(query, first = 10) {
  return (dispatch) => {
    if (query && query !== '') {
      dispatch({ type: types.SEARCH_START });
      return userSearch(
        {
          query,
          first,
        },
      ).then((response) => {
        dispatch(setSearchResults(response.data));
      })
        .catch((error) => {
          dispatch({
            type: types.SEARCH_ERROR,
            error,
          });
        });
    }
    return 0;
  };
}
