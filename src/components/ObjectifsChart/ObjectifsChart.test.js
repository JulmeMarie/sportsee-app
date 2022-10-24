import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ObjectifsChart from './ObjectifsChart';

describe('<ObjectifsChart />', () => {
  test('it should mount', () => {
    render(<ObjectifsChart />);
    
    const objectifsChart = screen.getByTestId('ObjectifsChart');

    expect(objectifsChart).toBeInTheDocument();
  });
});