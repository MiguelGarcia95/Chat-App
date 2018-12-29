import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './style.css';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';

import App from './components/App';

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
serviceWorker.unregister();
