import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/styles.scss';
import '@fortawesome/fontawesome-free/js/all.min';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
