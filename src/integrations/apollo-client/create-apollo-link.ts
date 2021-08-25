import { ApolloLink, HttpLink } from '@apollo/client';
import { onError } from '@apollo/client/link/error';

export default function createApolloLink(): ApolloLink {
  const errorLink = onError(({ networkError, graphQLErrors, operation }) => {
    if (operation.operationName.includes('NoError')) {
      return;
    }

    if (graphQLErrors) {
      graphQLErrors.forEach(() => {
        // showError(graphQLError.message);
        // Sentry.captureMessage(graphQLError.message);
      });
    }

    if (networkError) {
      // showError(networkError.message);
      // Sentry.captureException(networkError);
    }
  });

  const httpLink = new HttpLink({
    uri: 'https://rickandmortyapi.com/graphql',
    credentials: 'same-origin',
  });

  return ApolloLink.from([errorLink, httpLink]);
}
