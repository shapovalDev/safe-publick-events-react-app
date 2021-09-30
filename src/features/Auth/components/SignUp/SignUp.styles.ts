import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
    },

    form: {
      display: 'flex',
      justifyContent: 'space-between',
      height: '60vh',
    },

    input: {
      background: '#FFFFFF',
      borderRadius: '5px',
    },

    select: {
      width: '100%',
    },

    buttonBlock: {
      display: 'flex',
      justifyContent: 'space-between',
    },

    link: {
      textDecoration: 'none',
      fontFamily: 'Roboto, sans-serif',
      color: '#2d76d2',

      '&:hover': {
        textDecoration: 'underline',
      },
    },

    submitButton: {
      alignSelf: 'flex-end',
      width: '20%',
    },
  })
);
