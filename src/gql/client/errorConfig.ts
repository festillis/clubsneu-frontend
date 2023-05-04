import { MapExchangeOpts } from '@urql/core';

const errorConfig: MapExchangeOpts = {
  onError: (error) => {
    console.error('errorExchange', error);
  }
};

export default errorConfig;
