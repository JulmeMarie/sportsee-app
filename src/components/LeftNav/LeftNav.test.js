import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LeftNav from './LeftNav';

describe('<LeftNav />', () => {
  test('it should mount', () => {
    render(<LeftNav />);
    
    const leftNav = screen.getByTestId('LeftNav');

    expect(leftNav).toBeInTheDocument();
  });
});