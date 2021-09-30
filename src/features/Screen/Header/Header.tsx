import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import { useStyles } from './Header.styles';

export const Header = (): JSX.Element => {
  const classes = useStyles();

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
            <HealthAndSafetyIcon fontSize="large" /> S.P.E
          </Typography>
          <Button color="inherit">LogOut</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
