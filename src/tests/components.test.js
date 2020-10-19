import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../components/App';
import store from '../store';

describe('Components in document', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  test('Components must be in the document', () => {
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
    expect(screen.getByTestId('search-form')).toBeInTheDocument();
    expect(screen.getByTestId('home')).toBeInTheDocument();
  });
});
