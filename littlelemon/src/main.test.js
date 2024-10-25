import { render } from "@testing-library/react";
import Main, { initializeTimes } from './main'; // Adjust import if necessary

describe('Main component', () => {
  test('initializeTimes returns correct available times', () => {
    const date = '2023-10-25'; // Example date
    const expectedTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    
    const times = initializeTimes(date);
    expect(times).toEqual(expectedTimes);
  });
  
  test('updateTimes dispatches the correct state', () => {
    const { getByText } = render(<Main />);
  });
});
