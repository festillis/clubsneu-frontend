import { TypedDocumentNode } from '@urql/core';
import gqlClient from './gqlClient';

export const executeQuery = async <D, V>(
  query: TypedDocumentNode<D, V>,
  variables?: V
): Promise<D | undefined> => {
  const res = await gqlClient.query<D>(query, variables ?? {}).toPromise();
  return res.data;
};

export const executeMutation = async <D, V>(
  mutation: TypedDocumentNode<D, V>,
  variables?: V
): Promise<D | undefined> => {
  const res = await gqlClient.mutation<D>(mutation, variables ?? {}).toPromise();
  return res.data;
};

export const executeSubscription = async <D, V>(
  subscription: TypedDocumentNode<D, V>,
  variables?: V
): Promise<D | undefined> => {
  const res = await gqlClient.subscription<D>(subscription, variables ?? {}).toPromise();
  return res.data;
};
