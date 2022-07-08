import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      width: '100%',
    },

    field: {
      width: '45%',
      marginBottom: 20,
    },

    timePicker: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#817b7b',
      width: '45%',
      marginBottom: 20,
    },

    textarea: {
      boxSizing: 'border-box',
      width: '45%',
      resize: 'none',
      padding: '1%',
      fontSize: 18,
      border: '1px solid #C4C4C4',
      borderRadius: 5,
    },

    buttonBox: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      margin: '20px 0 20px 0',
    },
  })
);
