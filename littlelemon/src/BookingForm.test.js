import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm label', () => {
  render(<BookingForm />);
  const labelElement = screen.getByText(/choose date/i); // Adjust the text accordingly
  expect(labelElement).toBeInTheDocument();
});
