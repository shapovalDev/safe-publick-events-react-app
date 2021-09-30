import React, { ChangeEvent, useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useStyles } from './SignIn.styles';
import covidSafeLogo from '../../assets/covid-19-safe.png';
import { IAuthInput } from '../../model/Auth.model';
import { RoutePath } from '../../../../model/Routing';

export const SignIn = (): JSX.Element => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const inputs: IAuthInput[] = [
    {
      label: 'Email',
      type: 'text',
      value: email,
      name: 'email',
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },
    {
      label: 'Password',
      type: 'password',
      value: password,
      name: 'password',
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  return (
    <Box className={classes.root}>
      <Box className={classes.imageBlock}>
        <img className={classes.img} src={covidSafeLogo} alt="" />
      </Box>
      <FormControl className={classes.form}>
        <Typography variant="h4" justifyContent="center">
          Sign In
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
            Don't have an account yet? Sign Up!
          </NavLink>
          <Button
            type="button"
            color="primary"
            variant="contained"
            size="medium"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
