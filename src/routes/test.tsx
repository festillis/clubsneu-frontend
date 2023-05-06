import { Stack, TextField, Button } from '@suid/material';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Component, createEffect, createSignal } from 'solid-js';
import { Title } from 'solid-start';
import { auth } from '~/firebase';
import { executeMutation } from '~/gql/client';
import { TestAuthContextDocument } from '~/gql/generated/graphql';
import { authStore } from '~/store';

interface Props {}

const Test: Component<Props> = () => {
  const [email, setEmail] = createSignal<string>('');
  const [password, setPassword] = createSignal<string>('');

  createEffect(() => {
    console.log(authStore.user);
  });

  const onEmailChange = (email: string) => {
    setEmail(email);
  };

  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  const onTest = async () => {
    // const data = await executeMutation(TestAuthContextDocument);
    // console.log('testAuthContext', data?.testAuthContext);

    // Open Outlook in a new browser window
    const outlookWindow = window.open('https://outlook.office.com', '_blank');

    if (!outlookWindow) {
      console.warn("Couldn't open Outlook window");
      throw new Error("Couldn't open Outlook window");
    }
  };

  return (
    <>
      <Title>Test</Title>
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <TextField
          placeholder="Northeastern Email"
          fullWidth
          value={email()}
          onChange={(_, value) => onEmailChange(value)}
        />
        <TextField
          placeholder="Password"
          fullWidth
          value={password()}
          onChange={(_, value) => onPasswordChange(value)}
        />
        <Button variant="contained" color="primary" onClick={onTest}>
          Test
        </Button>
      </Stack>
    </>
  );
};

export default Test;
