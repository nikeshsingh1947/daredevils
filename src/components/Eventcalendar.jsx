// EventCalendar.js
import React, { useState } from 'react';
import { Box, Center } from '@chakra-ui/react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const EventCalendar = () => {
  const [date, setDate] = useState(new Date());
//event 
  const handleDateChange = (newDate) => {
    setDate(newDate);
  };
  
  return (
    <Box p={4}>
      <Center>
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </Center>
    </Box>
  );
};

export default EventCalendar;
