/* IE11 polyfill */
import 'babel-polyfill';
import 'matchmedia-polyfill';
import 'react-app-polyfill/ie11';

import 'normalize.css';
import './styles/bootstrap/bootstrap.min.css';
import './styles/app.scss';
import './styles/iconfont.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
