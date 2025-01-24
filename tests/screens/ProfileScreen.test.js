import React from 'react';
import { render } from '@testing-library/react-native';
import ProfileScreen from '../../src/screens/ProfileScreen';

describe('ProfileScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ProfileScreen />);
    expect(getByText('Profile')).toBeTruthy();
    expect(getByText('Name: John Doe')).toBeTruthy();
    expect(getByText('Email: john.doe@example.com')).toBeTruthy();
    expect(getByText('Phone: (123) 456-7890')).toBeTruthy();
  });
});
