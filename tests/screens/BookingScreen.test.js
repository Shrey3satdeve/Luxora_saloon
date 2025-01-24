import React from 'react';
import { render } from '@testing-library/react-native';
import BookingScreen from '../../src/screens/BookingScreen';

test('renders correctly', () => {
  const { getByText } = render(<BookingScreen />);
  expect(getByText('Book an Appointment')).toBeTruthy();
});
