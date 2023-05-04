/* eslint-disable no-undef */
import type { CodegenConfig } from '@graphql-codegen/cli';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const config: CodegenConfig = {
  schema: process.env.VITE_GRAPHQL_ENDPOINT,
  documents: join(__dirname, './schema/**/*.gql'),
  overwrite: true,
  generates: {
    [join(__dirname, './generated/graphql.ts')]: {
      plugins: ['typescript', 'typed-document-node', 'typescript-operations']
    },
    [join(__dirname, './generated/schema.json')]: {
      plugins: ['urql-introspection']
    }
  },
  config: {
    arrayInputCoercion: false,
    maybeValue: 'T | undefined',
    namingConvention: {
      enumValues: 'keep'
    }
  }
};

export default config;
