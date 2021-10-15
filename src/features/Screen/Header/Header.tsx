import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export const Header = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1 }} mb={5}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h4"
            component="div"
            display="flex"
            alignContent="center"
            sx={{ flexGrow: 1 }}
          >
            S.P.E
          </Typography>
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
