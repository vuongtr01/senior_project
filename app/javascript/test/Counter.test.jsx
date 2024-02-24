import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../components/common/Counter'

describe('Counter', () => {
  it('renders with correct props', () => {
    const setCounterMock = jest.fn();
    const { getByText } = render(
      <Counter classes={{}} setCounter={setCounterMock} counter={0} />
    );
    const counterText = getByText('0');
    expect(counterText).toBeInTheDocument();
  });
});
