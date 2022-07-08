import React, { ChangeEvent, useState } from 'react';
import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import { NavLink, useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './SignUp.styles';
import { IAuthInput, Role } from '../../model/Auth.model';
import { RoutePath } from '../../../../model/Routing';
import { registration } from '../../../../lib/Axios';
import { isValid } from '../../../../lib/Validation';
import { CustomSelect } from '../../../UI';

export const SignUp = (): JSX.Element => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const [t] = useTranslation();
  const history = useHistory();

  const inputs: IAuthInput[] = [
    {
      label: t('signUp.firstNameLabel'),
      type: 'text',
      value: firstName,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) => setFirstName(e.target.value),
    },
    {
      label: t('signUp.lastNameLabel'),
      type: 'text',
      value: lastName,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) => setLastName(e.target.value),
    },
    {
      label: t('signUp.emailLabel'),
      type: 'text',
      value: email,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    },
    {
      label: t('signUp.passwordLabel'),
      type: 'password',
      value: password,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    },
  ];

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setRole('');

    const userData = {
      name: firstName,
      surname: lastName,
      email,
      password,
      role,
    };
    await registration(userData);

    history.push('/');
  };

  return (
    <Box className={classes.root}>
      <FormControl className={classes.form}>
        <Typography variant="h4" justifyContent="center">
          {t('signUp.title')}
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
        <CustomSelect
          mapArray={[Role.EventOrganizer, Role.SecurityRepresentative]}
          label="Role"
          value={role}
          onChange={(e: any) => setRole(e.target.value)}
        />
        <Box className={classes.buttonBlock}>
          <NavLink to={RoutePath.SignIn} className={classes.link}>
            {t('signUp.createdAccount')}
          </NavLink>
          <Button
            type="button"
            color="primary"
            variant="contained"
            size="medium"
            disabled={isValid({ firstName, lastName, email, password, role })}
            className={classes.submitButton}
            onClick={(e: any) => handleSubmit(e)}
          >
            {t('signUp.submitButton')}
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};
