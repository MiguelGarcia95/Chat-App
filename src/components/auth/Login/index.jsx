import React from 'react';
import {Link} from 'react-router-dom';
// import PropTypes from 'prop-types';
import './style.css';

class Login extends React.Component {
  handleInputChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
  }

  render () {
    return (
      <section id="app">
        <section className='login'>
          <section className="form-header">
            <h1>Login</h1>
          </section>
          <form onSubmit={this.handleSubmit}>
            <section className="form-group">
              <input type="text" name='username' placeholder='Username' onChange={this.handleInputChange}/>
            </section>
            <section className="form-group">
              <input type="password" name='password' placeholder='Password' onChange={this.handleInputChange}/>
            </section>
            <section className="form-group">
              <button type='submit'>Login</button>
            </section>
          </form>
          <section className="form-footer">
            <Link to='/register'>Register Here</Link>
          </section>
        </section>
      </section>
    )
  }
}

export default Login;
