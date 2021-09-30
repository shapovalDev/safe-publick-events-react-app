import React, { ChangeEvent, useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useStyles } from './SignUp.styles';
import { IAuthInput, IMenuItem, Role, RoleLabel } from '../../model/Auth.model';
import { RoutePath } from '../../../../model/Routing';

export const SignUp = (): JSX.Element => {
  const classes = useStyles();

  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [role, setRole] = useState<string>('');
  const [organizationName, setOrganizationName] = useState<string>('');

  const isSecurityRole: boolean = role === Role.SecurityRepresentative;

  const inputs: IAuthInput[] = [
    {
      label: 'First Name',
      type: 'text',
      value: firstName,
      name: 'firstName',
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setFirstName(e.target.value),
    },
    {
      label: 'Last Name',
      type: 'text',
      value: lastName,
      name: 'lastName',
      changeFunction: (e: ChangeEvent<HTMLInputElement>) =>
        setLastName(e.target.value),
    },
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

  const menuItems: IMenuItem[] = [
    {
      value: Role.EventOrganizer,
      label: RoleLabel.EventOrganizer,
    },
    {
      value: Role.SecurityRepresentative,
      label: RoleLabel.SecurityRepresentative,
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
            <>
              <TextField
                className={classes.input}
                key={input.label}
                label={input.label}
                type={input.type}
                value={input.value}
                onChange={input.changeFunction}
              />
            </>
          );
        })}

        <FormControl>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            className={classes.select}
            value={role}
            label="Role"
            onChange={(e) => setRole(e.target.value)}
          >
            {menuItems.map((item: IMenuItem) => {
              return (
                <MenuItem key={item.value} value={item.value}>
                  {item.label}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>

        {isSecurityRole && (
          <TextField
            autoFocus
            className={classes.input}
            label="Organization"
            type="text"
            value={organizationName}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setOrganizationName(e.target.value)
            }
          />
        )}

        <Box className={classes.buttonBlock}>
          <NavLink to={RoutePath.SignIn} className={classes.link}>
            Already have an account? Sign In!
          </NavLink>
          <Button
            type="submit"
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
