import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import AddNewItemButton from '../components/items/AddNewItemButton';

describe('AddNewItemButton', () => {
  it('renders with correct text and styling', () => {
    const { getByText } = render(<AddNewItemButton />);
    const addButton = getByText('ADD NEW ITEM');
    expect(addButton).toBeInTheDocument();
    expect(addButton).toHaveStyle(`
      maxWidth: 100%;
      maxHeight: 50px;
      minWidth: 75%;
      minHeight: 50px;
    `);
  });

  it('calls handleNewItemClick function when clicked', () => {
    const handleNewItemClickMock = jest.fn();
    const { getByText } = render(<AddNewItemButton handleNewItemClick={handleNewItemClickMock} />);
    const addButton = getByText('ADD NEW ITEM');
    fireEvent.click(addButton);
    expect(handleNewItemClickMock).toHaveBeenCalled();
  });
});
