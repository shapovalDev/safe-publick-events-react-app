import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Box, Button, TextField } from '@mui/material';
import { Screen } from '../../../Screen';
import { useStyles } from './UserHome.styles';
import { getAllEventsByUser } from '../../../../lib/Axios';
import { EventCard } from '../../../Event';
import { CustomSelect } from '../../../UI';
import { RoutePath } from '../../../../model/Routing';

export const UserHome = (): JSX.Element => {
  const classes = useStyles();
  const [events, setEvents] = useState<any[] | []>([]);
  const [searchParam, setSearchParam] = useState<string>('');
  const [filterParam, setFilterParam] = useState<string>('');

  useEffect(() => {
    (async () => {
      const { data } = await getAllEventsByUser();
      setEvents(data);
    })();

    setInterval(() => {
      (async () => {
        const { data } = await getAllEventsByUser();
        setEvents(data);
      })();
    }, 60000);
  }, []);

  return (
    <Screen>
      <Box className={classes.menuBox}>
        <NavLink className={classes.createButton} to={RoutePath.CreateEvent}>
          <Button variant="contained">Create Event</Button>
        </NavLink>
        <TextField
          className={classes.searchField}
          id="outlined-search"
          label="Search by event name"
          type="search"
          value={searchParam}
          onChange={(e: any) => setSearchParam(e.target.value)}
        />
        <CustomSelect
          style={{ width: '30%' }}
          mapArray={['all', 'pending', 'requested', 'approved']}
          label="Filter by status"
          value={filterParam}
          onChange={(e: any) => setFilterParam(e.target.value)}
        />
      </Box>
      <Box className={classes.mainBox}>
        {events
          .filter((event: any) => event.eventName.toLowerCase().includes(searchParam.toLowerCase()))
          .filter((event: any) =>
            filterParam === 'all' ? events : event.status.toLowerCase().includes(filterParam.toLowerCase())
          )
          .map((event: any) => {
            return (
              <EventCard
                key={event._id}
                id={event._id}
                acceptedId={event.acceptedId}
                amountOfPeople={event.amountOfPeople}
                city={event.city}
                createdDate={event.createdDate}
                date={event.date}
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
