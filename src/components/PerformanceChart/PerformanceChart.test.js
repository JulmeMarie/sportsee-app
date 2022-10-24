import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PerformanceChart from './PerformanceChart';

describe('<PerformanceChart />', () => {
  test('it should mount', () => {
    render(<PerformanceChart />);

    const performanceChart = screen.getByTestId('PerformanceChart');

    expect(PerformanceChart).toBeInTheDocument();
  });
});