import React, { ChangeEvent, useEffect, useState } from 'react';
import { Box, Button, TextareaAutosize, TextField } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { DesktopDatePicker, TimePicker } from '@mui/lab';
import { Screen } from '../../../Screen';
import { CustomSelect } from '../../../UI';
import { useStyles } from './CreateEvent.styles';
import { Event } from '../../model/Event.model';
import { authStore } from '../../../../store/Auth.store';
import { isValid } from '../../../../lib/Validation';
import { createEventRequest } from '../../../../lib/Axios';
import { isEventOrganizer, Role } from '../../../Auth';

export const CreateEvent = (): JSX.Element => {
  const history = useHistory();
  const classes = useStyles();

  const [eventName, setEventName] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [importance, setImportance] = useState<Event.EventImportance>('');
  const [numberOfPeople, setNumberOfPeople] = useState<number | null>(null);
  const [description, setDescription] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [date, setDate] = useState<any>(null);
  const [timeFrom, setTimeFrom] = useState<any>(null);
  const [timeTo, setTimeTo] = useState<any>(null);
  const [numberOfGuards, setNumberOfGuards] = useState<number | null>(null);
  const [price, setPrice] = useState<number | null>(null);

  const formFields = {
    eventName,
    link,
    importance,
    numberOfPeople,
    description,
    city,
    date,
    timeFrom,
    timeTo,
    numberOfGuards,
    price,
  };

  useEffect(() => {
    history.push('/createEvent');
  }, []);

  const createEvent = async () => {
    const timeStart = new Date(timeFrom).toLocaleTimeString();
    const timeFinish = new Date(timeTo).toLocaleTimeString();

    const timeInterval = `${timeStart.slice(0, timeStart.length - 3)} - ${timeFinish.slice(0, timeFinish.length - 3)}`;

    const newEvent = {
      eventName,
      importance,
      amountOfPeople: numberOfPeople,
      date,
      time: timeInterval,
      city,
      linkWithDocument: link,
      description,
      numberOfGuards,
      price,
      userId: authStore?.userData?._id,
    };

    const response: any = await createEventRequest(newEvent);

    if (response) history.push('/');
  };

  return (
    <Screen>
      <Box className={classes.container}>
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Event Name"
          variant="outlined"
          value={eventName}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setEventName(e.target.value)}
        />
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setCity(e.target.value)}
        />
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Link With Document"
          variant="outlined"
          inputProps={{ inputMode: 'url' }}
          value={link}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setLink(e.target.value)}
        />

        <Box style={{ width: '45%', marginBottom: 20 }}>
          <DesktopDatePicker
            label="Date"
            inputFormat="dd/MM/yyyy"
            value={date}
            onChange={(newValue) => setDate(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>

        <CustomSelect
          mapArray={['lowest', 'medium', 'highest']}
          label="Importance"
          style={{ width: '45%' }}
          value={importance}
          onChange={(e: any) => setImportance(e.target.value)}
        />
        <Box className={classes.timePicker}>
          <TimePicker
            label="Time From"
            value={timeFrom}
            onChange={(newValue) => setTimeFrom(newValue)}
            renderInput={(params) => <TextField {...params} />}
          />
          —
          <TimePicker
            label="Time To"
            value={timeTo}
            onChange={(newValue) => {
              setTimeTo(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Number Of People"
          variant="outlined"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={numberOfPeople}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
            setNumberOfPeople(+e.target.value);
          }}
        />
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Number Of Guards"
          variant="outlined"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={numberOfGuards}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setNumberOfGuards(+e.target.value)}
        />
        <TextareaAutosize
          minRows={5}
          maxRows={5}
          placeholder="Description"
          className={classes.textarea}
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setDescription(e.target.value)}
        />
        <TextField
          className={classes.field}
          id="outlined-basic"
          label="Price"
          variant="outlined"
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
          value={price}
          onChange={(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => setPrice(+e.target.value)}
        />
      </Box>

      <Box className={classes.buttonBox}>
        <Button disabled={isValid(formFields)} variant="contained" onClick={createEvent}>
          Create Event
        </Button>
      </Box>
    </Screen>
  );
};
