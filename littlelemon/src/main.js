import React, { useReducer } from 'react';
import BookingPage from './BookingPage';

const initialState = {
  availableTimes: [],
  selectedDate: ''
};

// Reducer function to handle state changes
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return {
        ...state,
        selectedDate: action.payload,
        availableTimes: initializeTimes(action.payload), // Update available times based on selected date
      };
    case 'INITIALIZE_TIMES':
      return {
        ...state,
        availableTimes: action.payload,
      };
    default:
      return state;
  }
};

// Function to initialize available times
const initializeTimes = (date) => {
  // For now, return the same available times regardless of date
  return ['17:00', '18:00', '19:00', '20:00', '21:00'];
};

const Main = () => {
  const [state, dispatch] = useReducer(timesReducer, initialState);

  const updateTimes = (date) => {
    dispatch({ type: 'SET_DATE', payload: date });
  };

  return (
    <div>
      <BookingPage
        availableTimes={state.availableTimes}
        updateTimes={updateTimes}
      />
    </div>
  );
};

export default Main;
