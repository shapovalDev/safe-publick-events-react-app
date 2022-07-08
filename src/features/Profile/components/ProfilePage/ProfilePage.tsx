import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { Screen } from '../../../Screen';
import { useStyles } from './ProfilePage.styles';
import { authStore } from '../../../../store/Auth.store';
import { isValid } from '../../../../lib/Validation';
import { editProfile, getUserProfile } from '../../../../lib/Axios';

export const ProfilePage = () => {
  const classes = useStyles();
  const [userData, setUserData] = useState<any>(null);
  const [name, setName] = useState<string | undefined>(userData?.name);
  const [surname, setSurname] = useState<string | undefined>(userData?.surname);

  const avatarName = userData !== null && userData?.name[0] + userData?.surname[0];

  const formFields = { name, surname };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const getProfile = async () => {
    const { data } = await getUserProfile();
    setUserData(data);
  };

  useEffect(() => {
    getProfile();
  }, []);

  const updateProfile = async (newData: any) => {
    await editProfile(newData);
    const { data } = await getUserProfile();
    authStore.setUserData(data);
    await getProfile();
    handleClose();
  };

  return (
    <Screen>
      <Box className={classes.mainBox}>
        <Box className={classes.profile}>
          <Box className={classes.avatar}>{avatarName}</Box>
          <Box>
            <Typography variant="h3">Name: {userData?.name}</Typography>
            <Typography variant="h3">Surname: {userData?.surname}</Typography>
            <Typography variant="h3">Role: {userData?.role}</Typography>
            <Typography variant="h3">Email: {userData?.email}</Typography>
          </Box>
        </Box>
      </Box>
      <Button variant="contained" className={classes.modalButton} onClick={handleOpen}>
        <EditIcon />
        Edit Profile
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className={classes.modalBox}>
          <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
            Edit your profile
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            <TextField
              className={classes.field}
              id="outlined-basic"
              label="First Name"
              variant="outlined"
              value={name}
              onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setName(e.target.value)}
            />
            <TextField
              className={classes.field}
              id="outlined-basic"
              label="Second Name"
              variant="outlined"
              value={surname}
              onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setSurname(e.target.value)}
            />
            <Button disabled={isValid(formFields)} variant="contained" onClick={() => updateProfile(formFields)}>
              Save
            </Button>
          </Typography>
        </Box>
      </Modal>
    </Screen>
  );
};
