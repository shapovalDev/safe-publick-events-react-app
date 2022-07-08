import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    createButton: {
      color: '#FFFFFF',
      textDecoration: 'none',
    },

    menuBox: {
      display: 'flex',
      alignItems: 'center',

      '& *': {
        marginRight: '30px',
      },
    },

    searchField: {
      width: '400px',
    },

    mainBox: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      margin: '40px 0 20px 0',
    },
  })
);
