import type { AuthConfig, AuthUtilities } from '@urql/exchange-auth';
import { User, onAuthStateChanged } from 'firebase/auth';
import { createEffect, onCleanup } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import { LocalStorageKeys } from '~/constants';
import { auth } from '~/firebase';

interface AuthStore {
  user: User | null;
}

const [authStore, setAuthStore] = createStore<AuthStore>({
  user: null
});

const onUser = (user: User | null) => {
  if (user === null) {
    localStorage.removeItem(LocalStorageKeys.token);
  }

  setAuthStore(
    produce((state) => {
      state.user = user;
    })
  );
};

createEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, onUser);
  onCleanup(() => unsubscribe());
});

export default authStore;
