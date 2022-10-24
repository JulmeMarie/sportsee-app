import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ActivityChart from './ActivityChart';

describe('<ActivityChart />', () => {
  test('it should mount', () => {
    render(<ActivityChart />);

    const activityChart = screen.getByTestId('ActivityChart');

    expect(activityChart).toBeInTheDocument();
  });
});