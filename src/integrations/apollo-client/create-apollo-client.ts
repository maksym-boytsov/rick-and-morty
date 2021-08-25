import { ApolloClient, InMemoryCache } from '@apollo/client';

import createApolloLink from './create-apollo-link';

const link = createApolloLink();

export const inMemoryCache = new InMemoryCache();

export const client = new ApolloClient({
  connectToDevTools: true,
  link,
  cache: inMemoryCache,
});
