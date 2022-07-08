import React, { ChangeEvent, useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './SignIn.styles';
import covidSafeLogo from '../../assets/covid-19-safe.png';
import { IAuthInput } from '../../model/Auth.model';
import { RoutePath } from '../../../../model/Routing';
import { login } from '../../../../lib/Axios';
import { AlertBlock } from '../../../UI';
import { isValid } from '../../../../lib/Validation';

export const SignIn = (): JSX.Element => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoginSuccessful, setIsLoginSuccessful] = useState<boolean>(true);

  const [t] = useTranslation();
  const history = useHistory();

  const inputs: IAuthInput[] = [
    {
      label: t('signIn.emailLabel'),
      type: 'text',
      value: email,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      label: t('signIn.passwordLabel'),
      type: 'password',
      value: password,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
  ];

  const onSubmit = async (e: any) => {
    try {
      e.preventDefault();

      setEmail('');
      setPassword('');

      const credentials = { email, password };
      await login(credentials);

      history.push(RoutePath.Home);
    } catch (err) {
      setIsLoginSuccessful(false);
    }
  };

  return (
    <Box className={classes.root}>
      {!isLoginSuccessful && (
        <AlertBlock
          title="Login Error"
          content="Something went wrong. Try again!"
          type="error"
          onClick={() => setIsLoginSuccessful(true)}
        />
      )}
      <Box className={classes.imageBlock}>
        <img className={classes.img} src="https://www.digiseller.ru/preview/560956/p1_1993998_8fdf2fc6.png" alt="" />
      </Box>
      <FormControl className={classes.form}>
        <Typography variant="h4" justifyContent="center">
          {t('signIn.title')}
        </Typography>
        {inputs.map((input: IAuthInput) => {
          return (
            <TextField
              className={classes.input}
              key={input.label}
              label={input.label}
              type={input.type}
              value={input.value}
              onChange={input.changeFunction}
            />
          );
        })}
        <Box className={classes.buttonBlock}>
          <NavLink to={RoutePath.SignUp} className={classes.link}>
            {t('signIn.noAccount')}
          </NavLink>
          <Button
            type="button"
            color="primary"
            variant="contained"
            size="medium"
            disabled={isValid({ email, password })}
            className={classes.submitButton}
            onClick={(e: any) => onSubmit(e)}
          >
            {t('signIn.submitButton')}
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
