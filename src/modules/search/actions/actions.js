import client from '../../../client';
import * as types from './types';
import userSearchQuery from './queries';

export const resultsPerPage = 10;

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

export function searchStart(query) {
  return {
    type: types.SEARCH_START,
    query,
  };
}

export function userSearch({ query, pageProps }) {
  const {
    first, last, afterCursor, beforeCursor,
  } = pageProps;
  return client.query({
    query: userSearchQuery,
    variables: {
      query,
      first,
      last,
      afterCursor,
      beforeCursor,
    },
    fetchPolicy: 'network-only',
  });
}

/**
 * Handles page prop setup.
 * The endCursor and startCursor usage depends on
 * if they want to go forward or back.
 * end is used for going forward, start for going back.
 * In the query request, they match with after and before respectively.
 */
export function setupPageProps(cursor) {
  const { endCursor = null, startCursor = null } = cursor;

  // going forward a page
  if (endCursor) {
    return {
      first: resultsPerPage,
      afterCursor: endCursor,
    };
  }
  // going back a page
  if (startCursor) {
    return {
      last: resultsPerPage,
      beforeCursor: startCursor,
    };
  }
  return {
    first: resultsPerPage,
  };
}

export function runUserSearch(query, cursor = {}) {
  return (dispatch) => {
    if (query && query !== '') {
      const pageProps = setupPageProps(cursor);
      dispatch(searchStart(query));
      return userSearch(
        {
          query,
          pageProps,
        },
      ).then((response) => {
        dispatch(setSearchResults(response.data));
      })
        .catch((error) => {
          dispatch({
            type: types.SEARCH_ERROR,
            error,
            query,
          });
        });
    }
    return 0;
  };
}
