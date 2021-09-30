import React from 'react';
import { Container } from '@mui/material';
import { Header } from '../../../Screen/Header/Header';
import { useStyles } from './Home.styles';

export const Home = (): JSX.Element => {
  const classes = useStyles();

  return (
    <>
      <Header />
      <Container maxWidth="xl" />
    </>
  );
};
