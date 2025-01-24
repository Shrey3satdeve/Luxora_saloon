import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

test('renders correctly', () => {
  const { getByText } = render(<App />);
  expect(getByText('Welcome to the Beauty and Fashion App!')).toBeTruthy();
});
