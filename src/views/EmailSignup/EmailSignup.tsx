import { Button, Stack, TextField } from '@suid/material';
import { Component, createSignal } from 'solid-js';
import { isNortheasternEmail } from '~/utils/string';

interface Props {}

const EmailSignup: Component<Props> = () => {
  const [email, setEmail] = createSignal<string>('');

  const onChange = (email: string) => {
    setEmail(email);
  };

  const onSignup = async () => {
    if (!isNortheasternEmail(email())) {
      console.log(`${email()} is not a northeastern email`);
      return;
    }

    console.log(`Signing up with email ${email()}`);

    // await signInWithEmail(email());
  };

  return (
    <Stack direction="column" alignItems="center" justifyContent="center" height="100vh">
      <TextField onChange={(e) => onChange(e.target.value)} sx={{ width: '50%' }} />
      <Button onClick={onSignup}>Login</Button>
    </Stack>
  );
};

export default EmailSignup;
