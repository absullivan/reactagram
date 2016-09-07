import React from 'react';
import store from './store';
import ReactDOM from 'react-dom';
import Application from './components/application';

const render = () => {
  ReactDOM.render(
    <Application store={ store } />,
    document.querySelector('#main')
  );
}

store.subscribe(render);
render();
