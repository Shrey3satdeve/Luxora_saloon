import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BookingForm from '../../src/components/BookingForm';

test('renders correctly', () => {
  const { getByPlaceholderText, getByText } = render(<BookingForm />);
  
  expect(getByPlaceholderText('Name')).toBeTruthy();
  expect(getByPlaceholderText('Email')).toBeTruthy();
  expect(getByPlaceholderText('Phone')).toBeTruthy();
  expect(getByPlaceholderText('Date')).toBeTruthy();
  expect(getByPlaceholderText('Time')).toBeTruthy();
  expect(getByText('Select Service')).toBeTruthy();
  expect(getByText('Select Stylist')).toBeTruthy();
  expect(getByText('Select Time Slot')).toBeTruthy();
});

test('handles booking correctly', () => {
  const { getByPlaceholderText, getByText } = render(<BookingForm />);
  
  fireEvent.changeText(getByPlaceholderText('Name'), 'John Doe');
  fireEvent.changeText(getByPlaceholderText('Email'), 'john.doe@example.com');
  fireEvent.changeText(getByPlaceholderText('Phone'), '1234567890');
  fireEvent.changeText(getByPlaceholderText('Date'), '2022-12-31');
  fireEvent.changeText(getByPlaceholderText('Time'), '10:00 AM');
  fireEvent.press(getByText('Book Now'));
  
  expect(console.log).toHaveBeenCalledWith('Booking details:', {
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '1234567890',
    date: '2022-12-31',
    time: '10:00 AM',
    service: '',
    stylist: '',
    availableTimeSlot: ''
  });
});
