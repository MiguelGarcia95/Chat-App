import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './style.css';
import * as serviceWorker from './serviceWorker';

import App from './components/App';
import Login from './components/auth/Login/';
import Register from './components/auth/Register/';

const Root = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={App} />
      <Route path='/register' component={Register} />
      <Route path='/login' component={Login} />
    </Switch>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
