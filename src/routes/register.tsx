import { Stack, Typography } from '@suid/material';
import { Title } from 'solid-start';

const RegisterPassword = () => {
  return (
    <>
      <Title>Create password</Title>
      <Stack direction="column">
        <Typography>Thank you for verifying your email</Typography>
        <Typography>Now create a password to complete your account</Typography>
      </Stack>
    </>
  );
};

export default RegisterPassword;
