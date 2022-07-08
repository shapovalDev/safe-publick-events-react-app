import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { AccountMenu } from '../../../UI';
import { RoutePath } from '../../../../model/Routing';
import { isEventOrganizer } from '../../../Auth';

export const Header = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }} mb={5}>
      <AppBar>
        <Toolbar>
          <Typography variant="h4" component="div" display="flex" alignContent="center" sx={{ flexGrow: 1 }}>
            <NavLink style={{ color: '#FFFFFF', textDecoration: 'none' }} to={RoutePath.Home}>
              Safe Public Event - <b>{isEventOrganizer ? 'Event maker' : 'Security'}</b>
            </NavLink>
          </Typography>
          <AccountMenu />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
