import React from 'react';
import { render } from '@testing-library/react';
import { BasicAboutElectronics } from './about-electronics.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<BasicAboutElectronics />);
  const rendered = getByText('About our Electronics Store');
  expect(rendered).toBeTruthy();
});
