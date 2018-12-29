import React from 'react';
// import PropTypes from 'prop-types';

class Register extends React.Component {
  render () {
    return (
      <section id="app">
        <section className='register'>
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
            <section className="form-group">
              <button type='submit'>Register</button>
            </section>
          </form>
        </section>
      </section>
    )
  }
}

export default Register;
