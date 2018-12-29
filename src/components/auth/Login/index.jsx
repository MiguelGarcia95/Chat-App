import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './style.css';

class Login extends React.Component {
  render () {
    return (
      <section id="app">
        <section className='login'>
          <section className="form-header">
            <h1>Login</h1>
          </section>
          <form>
            <section className="form-group">
              <input type="text" name='username' placeholder='Username'/>
            </section>
            <section className="form-group">
              <input type="password" name='password' placeholder='Password'/>
            </section>
            <section className="form-group">
              <button type='submit'>Login</button>
            </section>
          </form>
          <section className="form-footer">
            <Link to='/register'>Not a memeber? Click here.</Link>
          </section>
        </section>
      </section>
    )
  }
}

export default Login;
