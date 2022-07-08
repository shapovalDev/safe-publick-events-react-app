import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Screen } from '../../../Screen';
import { getEventsForSecurity } from '../../../../lib/Axios';
import { EventCard } from '../../../Event';
import { useStyles } from './SecurityHome.styles';

export const SecurityHome = () => {
  const classes = useStyles();
  const [events, setEvents] = useState<any>([]);

  useEffect(() => {
    (async () => {
      const { data } = await getEventsForSecurity();
      setEvents(data);
    })();
  }, []);

  return (
    <Screen>
      <Box className={classes.mainBox}>
        {events.map((event: any) => {
          return (
            <EventCard
              key={event._id}
              id={event._id}
              acceptedId={event.acceptedId}
              amountOfPeople={event.amountOfPeople}
              city={event.city}
              createdDate={event.createdDate}
              date={+event.date}
              description={event.description}
              eventName={event.eventName}
              importance={event.importance}
              linkWithDocument={event.linkWithDocument}
              numberOfGuards={event.numberOfGuards}
              price={event.price}
              status={event.status}
              time={event.time}
            />
          );
        })}
      </Box>
    </Screen>
  );
};
