import React from 'react';
import { render } from '@testing-library/react-native';
import ServiceItem from '../../src/components/ServiceItem';

test('renders correctly', () => {
  const { getByText } = render(
    <ServiceItem name="Haircut" description="Professional haircut service" price="$30" />
  );

  expect(getByText('Haircut')).toBeTruthy();
  expect(getByText('Professional haircut service')).toBeTruthy();
  expect(getByText('$30')).toBeTruthy();
});
