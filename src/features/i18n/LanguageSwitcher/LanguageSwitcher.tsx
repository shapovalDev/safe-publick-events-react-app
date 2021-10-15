import React from 'react';
import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useStyles } from './LanguageSwitcher.styles';

export const LanguageSwitcher = (): JSX.Element => {
  const [t, i18n] = useTranslation();
  const classes = useStyles();

  const languageButtons = [
    { label: t('language.en'), value: 'en' },
    { label: t('language.ua'), value: 'ua' },
  ];

  const chooseLanguageHandler = (language: string): void => {
    i18n.changeLanguage(language);
  };

  return (
    <Box>
      {languageButtons.map((language: { label: string; value: string }) => {
        return (
          <Button
            type="button"
            color="inherit"
            variant="contained"
            size="medium"
            className={classes.languageSwitcher}
            key={language.label}
            onClick={() => chooseLanguageHandler(language.value)}
          >
            {language.label}
          </Button>
        );
      })}
    </Box>
  );
};
