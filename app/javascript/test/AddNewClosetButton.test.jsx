import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddNewClosetButton from '../components/closets/AddNewClosetButton';

describe('AddNewClosetButton', () => {
  it('renders with correct text', () => {
    const { getByText } = render(<AddNewClosetButton />);
    const addButton = getByText('ADD NEW CLOSET');
    expect(addButton).toBeInTheDocument();
  });

  it('calls handleNewClosetClick function when clicked', () => {
    const handleNewClosetClickMock = jest.fn();
    const { getByText } = render(<AddNewClosetButton handleNewClosetClick={handleNewClosetClickMock} />);
    const addButton = getByText('ADD NEW CLOSET');
    fireEvent.click(addButton);
    expect(handleNewClosetClickMock).toHaveBeenCalled();
  });
});
