import { h, render } from 'preact';
import { Provider } from 'preact-redux';
import store from './store';
import Application from './components/Application';
import './css/normalize.css';
import './css/base.css';

/** @jsx h */
render(
  <Provider store={ store }>
    <Application />
  </Provider>,
  document.querySelector('#root')
);
