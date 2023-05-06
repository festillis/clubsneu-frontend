import { Button, Stack } from '@suid/material';
import { Component } from 'solid-js';
import { Title, useNavigate } from 'solid-start';
import { RouteNames } from '~/constants';

const Home: Component = () => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate(RouteNames.test);
  };

  return (
    <>
      <Title>ClubNEU</Title>
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
        spacing={2}>
        <Button onClick={onNavigate} variant="contained" color="primary">
          Test
        </Button>
      </Stack>
    </>
  );
};

export default Home;
