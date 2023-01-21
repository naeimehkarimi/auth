import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import { myStore } from './redux/store';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={myStore}>
    <App  />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

