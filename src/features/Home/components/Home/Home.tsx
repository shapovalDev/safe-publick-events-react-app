import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../../../i18n';
import { Header } from '../../../Screen/Header/Header';

export const Home = (): JSX.Element => {
  const [t] = useTranslation();

  return (
    <Box>
      <Header />
      <LanguageSwitcher />
      {t('signUp.title')}
    </Box>
  );
};
