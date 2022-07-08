import React from 'react';
import { Box, Button, ToggleButton, ToggleButtonGroup } from '@mui/material';
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
    <ToggleButtonGroup
      color="primary"
      // value={alignment}
      exclusive
      // onChange={handleChange}
    >
      {languageButtons.map((language: { label: string; value: string }) => {
        return (
          <ToggleButton key={language.label} value={language.value}>
            {language.label}
          </ToggleButton>
        );
      })}
    </ToggleButtonGroup>
  );
};
