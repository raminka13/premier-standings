import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/store';
import Standings from '../components/Standings';

describe('Standings component renders correctly', () => {
  test('renders the page', () => {
    const standingsPage = render(
      <BrowserRouter>
        <Provider store={store}>
          <Standings />
        </Provider>
      </BrowserRouter>,
    );
    expect(standingsPage).toMatchSnapshot();
  });
});
