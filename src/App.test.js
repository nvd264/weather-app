import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  let props;
  
  beforeEach(() => {
    props = {
      weatherList: null,
      loading: false,
      getWeatherInfo: jest.fn(),
    };
  });
  
  test('Should match the snapshot on init', () => {
    const { container } = render(<App {...props} />);
    expect(container).toMatchSnapshot();
  });
  
  test('Should show loading', () => {
    props.loading = true;
    render(<App {...props} />);
    expect(screen.getByText(/Loading/)).toBeInTheDocument();
  });
  
  test('Should match the snapshot with weather info', () => {
    props.weatherList = {
      Thursday: {
        min: 1,
        max: 2,
        icon: 'test1',
        dateStr: '2021-1-21'
      },
      Friday: {
        min: 3,
        max: 4,
        icon: 'test2',
        dateStr: '2021-1-22'
      },
      Saturday: {
        min: 5,
        max: 6,
        icon: 'test3',
        dateStr: '2021-1-23'
      },
    };
    
    const { container } = render(<App {...props} />);
    expect(container).toMatchSnapshot();
  });
});


