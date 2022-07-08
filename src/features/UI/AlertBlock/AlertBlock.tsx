import React from 'react';
import { Alert, AlertTitle } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IProps {
  type: 'error' | 'warning' | 'info' | 'success';
  title: string;
  content: string;
  onClick: () => void;
}

const styles: any = {
  width: '20%',
  position: 'absolute',
  top: 19,
  right: 19,
};

export const AlertBlock = ({ type, title, content, onClick }: IProps): JSX.Element => {
  return (
    <Alert severity={type} style={styles}>
      <CloseIcon
        style={{
          width: 18,
          height: 18,
          position: 'absolute',
          top: 2,
          right: 2,
          cursor: 'pointer',
        }}
        onClick={onClick}
      />
      <AlertTitle>{title}</AlertTitle>
      {content}
    </Alert>
  );
};
