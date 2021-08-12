import React from 'react';
import { render } from '@testing-library/react';
import { BasicHomeElectronics } from './home-electronics.composition';

it('should render with the correct text', () => {
  const { getAllByText } = render(<BasicHomeElectronics />);
  const rendered = getAllByText('Your Number 1 Electronics Shop');
  expect(rendered).toBeTruthy();
});
