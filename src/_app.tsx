import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { client } from 'integrations/apollo-client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from 'store';

import CharacterRoutes from './pages/character/character';

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <ReduxProvider store={store}>
          <Router>
            <CharacterRoutes />
          </Router>
        </ReduxProvider>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
