import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TextFieldRow from '../components/common/TextFieldRow';

describe('TextFieldRow', () => {
  it('renders with correct props', () => {
    const setValueMock = jest.fn();
    const { getByText, getByRole } = render(
      <TextFieldRow
        classes={{}}
        questionTitle="Question Title"
        setValue={setValueMock}
        value=""
      />
    );
    const questionTitle = getByText('Question Title');
    const textField = getByRole('textbox');
    expect(questionTitle).toBeInTheDocument();
    expect(textField).toBeInTheDocument();
  });

  it('calls setValue with correct value when blurred', () => {
    const setValueMock = jest.fn();
    const { getByRole } = render(
      <TextFieldRow
        classes={{}}
        questionTitle="Question Title"
        setValue={setValueMock}
        value=""
      />
    );
    const textField = getByRole('textbox');
    fireEvent.change(textField, { target: { value: 'New Value' } });
    fireEvent.blur(textField);
    expect(setValueMock).toHaveBeenCalledWith('New Value');
  });
});
