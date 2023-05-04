import { Stack, Typography, TextField, Button } from '@suid/material';
import { Component, createSignal } from 'solid-js';
import { Title } from 'solid-start';
import { executeMutation } from '~/gql/client';
import { SetVerificationCodeDocument } from '~/gql/generated/graphql';
import { isEmail } from '~/utils/string';

interface Props {}

const VerifyEmail: Component<Props> = () => {
  const [email, setEmail] = createSignal<string>('');

  const onEmailChange = (email: string) => {
    setEmail(email);
  };

  const clearEmail = () => {
    setEmail('');
  };

  const onVerify = async () => {
    if (!isEmail(email())) {
      console.warn(`${email()} is not a valid email`);
      return;
    }

    console.log(`Creating verificationCode for ${email()}`);
    const data = await executeMutation(SetVerificationCodeDocument, {
      email: email()
    });
    console.log(`Set verificationCode for ${email()} ${data?.setVerificationCode}`);

    clearEmail();
  };

  return (
    <>
      <Title>Verify email</Title>
      <Stack direction="column" alignItems="center" justifyContent="center" spacing={2}>
        <Typography>Enter your email</Typography>
        <TextField
          placeholder="Your Northeastern email"
          fullWidth
          value={email()}
          onChange={(_, value) => onEmailChange(value)}
        />
        <Button variant="contained" color="primary" onClick={onVerify}>
          Verify
        </Button>
      </Stack>
    </>
  );
};

export default VerifyEmail;
