import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Salutation from './Salutation';

describe('<Salutation />', () => {
  test('it should mount', () => {
    render(<Salutation />);
    
    const salutation = screen.getByTestId('Salutation');

    expect(salutation).toBeInTheDocument();
  });
});