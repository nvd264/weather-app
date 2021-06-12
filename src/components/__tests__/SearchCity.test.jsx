import { render, screen, fireEvent } from '@testing-library/react';
import SearchCity from '../SearchCity';

describe('SearchCity Component', () => {
  
  const props = {
    onSearch: jest.fn(),
  };
  
  const setUp = () => {
    return render(<SearchCity {...props} />);
  };
  
  test('Should match the snapshot on init', () => {
    const { container } = setUp();
    expect(container).toMatchSnapshot();
  });
  
  test('Should show Enter suggestion when user input is entered', () => {
    const utils = setUp();
    const input = utils.getByLabelText('search-input');
    fireEvent.change(input, { target: { value: 'L' } });
    expect(screen.getByText(/Enter/)).toBeInTheDocument();
  });
  
  test('Should handle search when user press enter', () => {
    const utils = setUp();
    const input = utils.getByLabelText('search-input');

    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 });
    
    expect(props.onSearch).toHaveBeenCalledWith('London');
  });
});


