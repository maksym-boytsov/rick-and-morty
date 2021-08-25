import { ApolloProvider } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { client } from 'integrations/apollo-client';
import { BrowserRouter as Router } from 'react-router-dom';

import CharacterRoutes from './pages/character/character';

function App() {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <CharacterRoutes />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default App;
