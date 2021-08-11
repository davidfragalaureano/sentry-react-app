import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EarthSpin from './EarthSpin';

describe('<EarthSpin />', () => {
  test('it should mount', () => {
    render(<EarthSpin />);

    const earthSpin = screen.getByTestId('EarthSpin');

    expect(earthSpin).toBeInTheDocument();
  });
});
