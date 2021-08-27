import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GITHUB_API_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_GITHUB_API_TOKEN;
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const possibleNodeTypes = ['User', 'App', 'Discussion', 'Issue', 'MarketplaceListing', 'Organization', 'PullRequest', 'Repository'];

const cache = new InMemoryCache({
  possibleTypes: {
    Node: possibleNodeTypes,
  },
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export default client;
