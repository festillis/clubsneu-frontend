import { CombinedError, Operation } from '@urql/core';
import type { AuthConfig, AuthUtilities } from '@urql/exchange-auth';
import { LocalStorageKeys } from '~/constants';
import { auth } from '~/firebase';

const getToken = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(LocalStorageKeys.token);
  }
  return undefined;
};

const addToOperation = (utilities: AuthUtilities, operation: Operation): Operation => {
  const token = getToken();
  if (!token) {
    return operation;
  }

  return utilities.appendHeaders(operation, {
    authorization: `Bearer ${token}`
  });
};

const didAuthError = (error: CombinedError) => {
  return error.graphQLErrors.some(
    (e) => (e.extensions as any)['originalError']['message'] === 'User not authenticated'
  );
};

const refreshAuth = async () => {
  const token = await auth.currentUser?.getIdToken(true);
  if (token === undefined) {
    throw new Error('Unable to refresh token');
  }

  localStorage.setItem(LocalStorageKeys.token, token);
};

const authConfig = async (utilities: AuthUtilities): Promise<AuthConfig> => ({
  addAuthToOperation: (operation) => addToOperation(utilities, operation),
  didAuthError,
  refreshAuth
});

export default authConfig;
