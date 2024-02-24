import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import WarningButton from '../components/common/WarningButton';

describe('WarningButton', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<WarningButton classes={{}} text="Click me" />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('renders with correct initial styling', () => {
    const { getByText } = render(<WarningButton classes={{}} text="Click me" />);
    const button = getByText('Click me');
    expect(button).toHaveStyle('backgroundColor: LIGHT_RED_COLOR');
    expect(button).toHaveStyle('color: #fff');
    // Add more style assertions as needed
  });

  it('changes styling on hover', () => {
    const { getByText } = render(<WarningButton classes={{}} text="Click me" />);
    const button = getByText('Click me');
    fireEvent.mouseEnter(button);
    expect(button).toHaveStyle('backgroundColor: DARK_RED_COLOR');
    // Add more style assertions as needed
  });

  it('disables the button when isValid is false', () => {
    const { getByText } = render(<WarningButton classes={{}} text="Click me" isValid={false} />);
    const button = getByText('Click me');
    expect(button).toBeDisabled();
  });

  it('does not disable the button when isValid is true', () => {
    const { getByText } = render(<WarningButton classes={{}} text="Click me" isValid />);
    const button = getByText('Click me');
    expect(button).not.toBeDisabled();
  });

  // Add more test cases as needed
});
