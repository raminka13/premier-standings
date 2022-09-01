import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import Seasons from '../components/Seasons';

describe('Seasons component renders correctly', () => {
  test('renders the page', () => {
    const seasonsPage = render(
      <Provider store={store}>
        <Seasons />
      </Provider>,
    );
    expect(seasonsPage).toMatchSnapshot();
  });

  test("displays the title 'Seasons' ", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Seasons />
      </Provider>,
    );
    expect(getByText('Premier League Standings')).toBeInTheDocument();
  });
});
