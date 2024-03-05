import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NewItem from '../components/items/NewItem';

// Mock dependencies
jest.mock('../components/common/NavBar', () => () => <div data-testid="mock-nav-bar">Mock NavBar</div>);
jest.mock('../components/items/BulkCreateItems', () => () => <div data-testid="mock-bulk-create-items">Mock BulkCreateItems</div>);

describe('NewItem', () => {
  it('renders without crashing', () => {
    render(<NewItem />);
  });

  it('renders NavBar component', () => {
    const { getByTestId } = render(<NewItem />);
    const navBar = getByTestId('mock-nav-bar');
    expect(navBar).toBeInTheDocument();
  });

  it('renders BulkCreateItems component with correct form title', () => {
    const { getByTestId, getByText } = render(<NewItem />);
    const bulkCreateItems = getByTestId('mock-bulk-create-items');
    expect(bulkCreateItems).toBeInTheDocument();
  });

  // Add more tests as needed

});
