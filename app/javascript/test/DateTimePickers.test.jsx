import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DateTimePickers from '../components/common/DateTimePickers';

describe('DateTimePickers', () => {
  it('renders with correct props', () => {
    const setTimeMock = jest.fn();
    const { getByText } = render(
      <DateTimePickers classes={{}} setTime={setTimeMock} time={{ buy: null, expr: null }} />
    );
    const buyDateText = getByText('Buy date');
    const exprDateText = getByText('Expr date');
    expect(buyDateText).toBeInTheDocument();
    expect(exprDateText).toBeInTheDocument();
  });
});
