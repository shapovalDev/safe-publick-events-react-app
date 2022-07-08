import * as React from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink, useHistory } from 'react-router-dom';
import { removeLocalStorageItem } from '../../../lib/LocalStorage';
import { authStore } from '../../../store/Auth.store';
import { RoutePath } from '../../../model/Routing';

export const AccountMenu = (): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const history = useHistory();
  const avatarName = authStore.userData !== null && authStore?.userData?.name[0] + authStore?.userData?.surname[0];

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut = () => {
    authStore.setUserData(null);
    removeLocalStorageItem('accessToken', 'currentUserRole');
    history.push(RoutePath.SignIn);
    handleClose();
  };

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
            <Avatar sx={{ width: 32, height: 32 }}>{avatarName}</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <NavLink
          to={RoutePath.Profile}
          style={{ textDecoration: 'none' }}
          onClick={() => history.push(RoutePath.Profile)}
        >
          <MenuItem>
            <Avatar>{avatarName}</Avatar> My account
          </MenuItem>
        </NavLink>
        <Divider />
        <MenuItem style={{ color: 'red' }} onClick={logOut}>
          <ListItemIcon style={{ color: 'red' }}>
            <LogoutIcon fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};
