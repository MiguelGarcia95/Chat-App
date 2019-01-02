import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser, unsetUser} from '../redux/actions/authActions';
import firebase from '../redux/firebase';
import './App.css';

import Login from './auth/Login/';
import Register from './auth/Register/';
import Homeroom from './chat/Homeroom/';

class AppWithRoutes extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.setUser(user);
        this.props.history.push('/');
      } else {
        this.props.history.push('/login');
      }
    })
  }

  render() {
    const {isLoading} = this.props;

    return isLoading ? <Spinner /> : (
      <Switch>
        <Route exact path='/' component={Homeroom} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user)),
    unsetUser: () => dispatch(unsetUser())
  }
}

const AppWithAuth = withRouter(connect(mapStateToProps, mapDispatchToProps)(AppWithRoutes));

const App = () => (
  <Router>
    <AppWithAuth />
  </Router>
);

export default App;
