import React from 'react';
// import PropTypes from 'prop-types';
import './style.css';

class Login extends React.Component {
  render () {
    return (
      <section id="app">
        <section className='login'>
          <form>
            <section className="form-group">
              <input type="text" name='username' placeholder='Username'/>
            </section>
            <section className="form-group">
              <input type="email" name='email' placeholder='Email'/>
            </section>
            <section className="form-group">
              <input type="password" name='password' placeholder='Password'/>
            </section>
            <section className="form-group">
              <input type="password" name='confirm-password' placeholder='Confirm Password'/>
            </section>
            <button type='submit'>Login</button>
          </form>
        </section>
      </section>
    )
  }
}

export default Login;
