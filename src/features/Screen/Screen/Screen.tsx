import React from 'react';
import { Container } from '@mui/material';
import { Header } from '../Header/Header';

interface IProps {
  children: any;
}

export const Screen = ({ children }: IProps): JSX.Element => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};
