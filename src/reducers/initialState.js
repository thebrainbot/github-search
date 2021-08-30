const initialState = {
  search: {
    query: null,
    loading: null,
    error: null,
    userCount: null,
    pageInfo: {
      startCursor: null,
      endCursor: null,
    },
    nodes: null,
  },
};

export default initialState;
