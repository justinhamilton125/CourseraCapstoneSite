import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <div>
      <h1>Book Your Experience</h1>
      <p>Please fill in the form below to reserve your table.</p>
      <BookingForm />
      <p>Thank you for choosing us!</p>
    </div>
  );
};

export default BookingPage;
