import React, { useEffect } from 'react';
import jwtDecode from 'jwt-decode';
import { Box, Container } from '@mui/material';
import { Header } from '../Header/Header';
import { getLocalStorage } from '../../../../lib/LocalStorage';
import { authStore } from '../../../../store/Auth.store';

export const Screen = ({ children }: { children: any }): JSX.Element => {
  useEffect(() => {
    const userData: any = jwtDecode(getLocalStorage('accessToken') as string);
    authStore.setUserData(userData.user);
  }, []);

  return (
    <>
      <Box position="static" marginBottom={10}>
        <Header />
      </Box>
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};
