import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import KpiChart from './KpiChart';

describe('<KpiChart />', () => {
  test('it should mount', () => {
    render(<KpiChart />);
    
    const kpiChart = screen.getByTestId('KpiChart');

    expect(kpiChart).toBeInTheDocument();
  });
});