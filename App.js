import { ApolloProvider } from '@apollo/client';
import React from 'react';
import { NativeRouter } from 'react-router-native';

import Main from './Main';
import createApolloClient from './src/utils/apolloClient';

const apolloClient = createApolloClient();
export default function App() {
  return (
  <NativeRouter>
    <ApolloProvider client={apolloClient}>
      <Main/>
    </ApolloProvider>
  </NativeRouter>
  );
}
