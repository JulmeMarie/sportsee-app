import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopNav from './TopNav';

describe('<TopNav />', () => {
  test('it should mount', () => {
    render(<TopNav />);
    
    const topNav = screen.getByTestId('TopNav');

    expect(topNav).toBeInTheDocument();
  });
});