import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CardInfos from './CardInfos';

describe('<Calorie />', () => {
  test('it should mount', () => {
    render(<CardInfos />);

    const calorie = screen.getByTestId('CardInfos');

    expect(calorie).toBeInTheDocument();
  });
});