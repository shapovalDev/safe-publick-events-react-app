import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100vw',
      height: '100vh',
      padding: '2%',
      boxSizing: 'border-box',
    },

    imageBlock: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box',
      width: '60%',
      height: '100%',
    },

    img: {
      width: '30vw',
      height: '30vw',
    },

    form: {
      justifyContent: 'space-between',
      width: '40%',
      height: '40vh',
      padding: '1% !important',
      boxSizing: 'border-box',
      borderRadius: '10px',
      background: '#FFFFFF',
    },

    input: {
      background: '#FFFFFF',
      borderRadius: '5px',
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
