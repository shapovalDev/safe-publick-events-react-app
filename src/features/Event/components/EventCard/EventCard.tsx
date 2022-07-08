import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { isEventOrganizer } from '../../../Auth';
import { useStyles } from './EventCard.styles';
import { sendEventRequest } from '../../../../lib/Axios';

export const EventCard = ({
  id,
  acceptedId,
  amountOfPeople,
  city,
  date,
  description,
  eventName,
  importance,
  linkWithDocument,
  numberOfGuards,
  price,
  status,
  time,
}: any) => {
  const classes = useStyles();

  const [isRequested, setIsRequested] = useState(false);

  const sendRequest = async (id: string) => {
    await sendEventRequest(id);
    setIsRequested(true);
  };

  return (
    <Card sx={{ width: '47%', marginBottom: 5, paddingBottom: 3 }} className={classes.card}>
      <CardHeader title={eventName} subheader={`Importance: ${importance}`} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <b>City:</b> {city}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Date:</b> {new Date(date).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Time:</b> {time}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>
            <a href={linkWithDocument}>Link With Document</a>
          </b>
        </Typography>
        <hr style={{ backgroundColor: '#C4C4C4' }} />
        <Typography variant="body2" color="text.secondary">
          <b>Number Of People:</b> {amountOfPeople}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Number Of Guards:</b> {numberOfGuards}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>Price:</b> {price}
        </Typography>
      </CardContent>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* eslint-disable-next-line no-nested-ternary */}
      {isEventOrganizer ? (
        <Box className={classes.statusBox}>{status.toUpperCase()}</Box>
      ) : !isRequested ? (
        <Button variant="outlined" style={{ color: 'blue', border: '2px solid blue' }} onClick={() => sendRequest(id)}>
          Send Request
        </Button>
      ) : (
        <Button disabled variant="outlined" style={{ color: 'green', border: '2px solid green' }}>
          <DoneOutlineIcon />
          &#x20; Requested
        </Button>
      )}
    </Card>
  );
};
