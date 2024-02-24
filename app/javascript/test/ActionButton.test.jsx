import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import ActionButton from '../components/common/ActionButton';

describe('ActionButton', () => {
  it('renders with the correct text', () => {
    const { getByText } = render(<ActionButton text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('renders with disabled attribute when isValid is false', () => {
    const { container } = render(<ActionButton text="Click me" isValid={false} />);
    const button = container.querySelector('button');
    expect(button).toHaveAttribute('disabled');
  });

  it('calls onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<ActionButton text="Click me" onClick={onClickMock} />);
    fireEvent.click(getByText('Click me'));
    expect(onClickMock).toHaveBeenCalled();
  });

  it('applies correct class when hovered', () => {
    const { container } = render(<ActionButton text="Click me" />);
    const button = container.querySelector('button');
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('backgroundColor: SECONDARY_DARK_BLUE_COLOR');
  });
});
