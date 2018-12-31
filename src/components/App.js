import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {setUser} from '../redux/actions/authActions';
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
      }
    })
  }

  render() {
    // console.log(this.props);
    return (
      <Switch>
        <Route exact path='/' component={Homeroom} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setUser: (user) => dispatch(setUser(user))
  }
}

const AppWithAuth = withRouter(connect(null, mapDispatchToProps)(AppWithRoutes));

const App = () => (
  <Router>
    <AppWithAuth />
  </Router>
);

// class App extends Component {
//
//   render() {
//     console.log(this.props);
//     return (
//       <Router>
//         <Switch>
//           <Route exact path='/' component={Homeroom} />
//           <Route path='/register' component={Register} />
//           <Route path='/login' component={Login} />
//         </Switch>
//       </Router>
//     );
//   }
// }


export default App;
// export default connect(null, mapDispatchToProps)(App);
