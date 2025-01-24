import React from 'react';
import { render } from '@testing-library/react-native';
import HomeScreen from '../../src/screens/HomeScreen';

test('renders welcome message', () => {
  const { getByText } = render(<HomeScreen />);
  expect(getByText('Welcome to the Beauty and Fashion App!')).toBeTruthy();
});

test('renders description', () => {
  const { getByText } = render(<HomeScreen />);
  expect(getByText('Discover a variety of beauty and fashion services, book appointments, and explore profiles of top professionals in the industry.')).toBeTruthy();
});
