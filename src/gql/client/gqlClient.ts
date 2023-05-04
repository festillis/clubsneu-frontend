/* eslint-disable no-undef */
import {
  Client as UrqlClient,
  cacheExchange,
  createClient,
  errorExchange,
  fetchExchange,
  ssrExchange
} from '@urql/core';
import { authExchange } from '@urql/exchange-auth';
import authConfig from './authConfig';
import errorConfig from './errorConfig';

const gqlClient = createClient({
  url: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  exchanges: [
    authExchange(authConfig),
    cacheExchange,
    errorExchange(errorConfig),
    fetchExchange,
    ssrExchange()
  ]
});

export default gqlClient;
