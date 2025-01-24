import React from 'react';
import { render } from '@testing-library/react-native';
import ServicesScreen from '../../src/screens/ServicesScreen';

describe('ServicesScreen', () => {
  it('renders correctly', () => {
    const { getByText } = render(<ServicesScreen />);
    expect(getByText('Available Services')).toBeTruthy();
  });

  it('renders service categories', () => {
    const { getByText } = render(<ServicesScreen />);
    expect(getByText('Budget-Friendly Finds')).toBeTruthy();
    expect(getByText('Mid-Range Classics')).toBeTruthy();
    expect(getByText('Luxury Picks')).toBeTruthy();
  });

  it('renders service items', () => {
    const { getByText } = render(<ServicesScreen />);
    expect(getByText('Haircut')).toBeTruthy();
    expect(getByText('Facial')).toBeTruthy();
    expect(getByText('Makeup')).toBeTruthy();
    expect(getByText('Fashion Consultation')).toBeTruthy();
  });
});
