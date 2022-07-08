import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() =>
  createStyles({
    card: {
      '&:hover': {
        cursor: 'pointer',
      },
    },

    statusBox: {
      marginLeft: 13,
    },
  })
);
