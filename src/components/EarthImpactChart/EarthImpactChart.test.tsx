import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EarthImpactChart from './EarthImpactChart';

describe('<EarthImpactChart />', () => {
  test('it should mount', () => {
    render(<EarthImpactChart />);

    const earthImpactChart = screen.getByTestId('EarthImpactChart');

    expect(earthImpactChart).toBeInTheDocument();
  });
});
