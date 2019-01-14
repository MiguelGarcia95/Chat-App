import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser, unsetUser} from '../redux/actions/authActions';
import firebase from '../redux/firebase';
import './App.css';

import Login from './auth/Login/';
import Register from './auth/Register/';
import Homeroom from './chat/Homeroom/';
import Chatroom from './chat/Chatroom/';
import Spinner from './layout/Spinner/';
import ChatNavbar from './layout/ChatNavbar/';

class AppWithRoutes extends Component {

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user)
      if (user) {
        this.props.setUser(user);
      } else {
        this.props.history.push('/login');
        this.props.unsetUser();
      }
    })
  }

  render() {
    const {isLoading} = this.props;

    return isLoading ? <Spinner /> : (
      <React.Fragment>
        <Route exact path={['/', '/chatroom/:id']} component={ChatNavbar} />
        <Switch>
          <Route exact path='/' component={Homeroom} />
          <Route path='/chatroom/:id' component={Chatroom} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </Switch>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading,
    user: state.auth.currentUser
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
