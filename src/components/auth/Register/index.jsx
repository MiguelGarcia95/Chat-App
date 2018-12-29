import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './style.css';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmedPassword: ''
  }

  handleInputChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
  }

  render () {
    return (
      <section id="app">
        <section className='register'>
          <section className="form-header">
            <h1>Register</h1>
          </section>
          <form onSubmit={this.handleSubmit}>
            <section className="form-group">
              <input type="text" name='username' placeholder='Username' onChange={this.handleInputChange}/>
            </section>
            <section className="form-group">
              <input type="email" name='email' placeholder='Email' onChange={this.handleInputChange}/>
            </section>
            <section className="form-group">
              <input type="password" name='password' placeholder='Password' onChange={this.handleInputChange}/>
            </section>
            <section className="form-group">
              <input type="password" name='confirmedPassword' placeholder='Confirm Password' onChange={this.handleInputChange}/>
            </section>
            <section className="form-group">
              <button type='submit'>Register</button>
            </section>
          </form>
          <section className="form-footer">
            <Link to='/login'>Login Here</Link>
          </section>
        </section>
      </section>
    )
  }
}

export default Register;
