import React, { useState } from 'react';

const BookingForm = ({ availableTimes, updateTimes }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setDate(selectedDate);
    updateTimes(selectedDate); // Dispatch the new date
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <button type="submit">Reserve Table</button>
    </form>
  );
};

export default BookingForm;
