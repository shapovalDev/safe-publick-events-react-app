import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useStyles } from './SignUp.styles';
import { IAuthInput, Role } from '../../model/Auth.model';
import { RoutePath } from '../../../../model/Routing';

export const SignUp = (): JSX.Element => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');

  const inputs: IAuthInput[] = [
    {
      label: 'First Name',
      type: 'text',
      value: firstName,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setFirstName(e.target.value),
    },
    {
      label: 'Last Name',
      type: 'text',
      value: lastName,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setLastName(e.target.value),
    },
    {
      label: 'Email',
      type: 'text',
      value: email,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setEmail(e.target.value),
    },
    {
      label: 'Password',
      type: 'password',
      value: password,
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setPassword(e.target.value),
    },
  ];

  return (
    <Box className={classes.root}>
      <FormControl className={classes.form}>
        <Typography variant="h4" justifyContent="center">
          Sign Up
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
        <Select
          className={classes.select}
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <MenuItem defaultChecked value={Role.EventOrganizer}>
            Event organizer
          </MenuItem>
          <MenuItem value={Role.SecurityRepresentative}>
            Security representative
          </MenuItem>
        </Select>
        <Box className={classes.buttonBlock}>
          <NavLink to={RoutePath.SignIn} className={classes.link}>
            Already have an account? Sign In!
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
