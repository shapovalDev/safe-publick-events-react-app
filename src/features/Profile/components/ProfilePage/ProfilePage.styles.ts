import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    mainBox: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      paddingTop: '10%',
    },

    profile: {
      display: 'flex',
      alignItems: 'center',
      width: '95%',
      marginBottom: '30px',
    },

    modalButton: {
      marginLeft: '2.5%',
      backgroundColor: 'orange',

      '&:hover': {
        background: 'orange',
      },
    },

    avatar: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '250px',
      height: '250px',
      backgroundColor: '#C4C4C4',
      color: '#FFFFFF',
      fontSize: '120px',
      borderRadius: '10px',
      marginRight: '50px',
    },

    modalBox: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: '#FFFFFF',
      borderRadius: '5px',
      boxShadow: '24px',
      padding: 30,
    },

    field: {
      width: '100%',
      marginBottom: '2%',
    },
  })
);
