import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../../redux/actions/authActions';
import './style.css';

class Login extends React.Component {
  state = {
    email: '',
    password: ''
  }
  
  handleInputChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
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
              <input type="email" name='email' placeholder='Email' onChange={this.handleInputChange}/>
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

Login.propTypes = {
  login: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userData) => dispatch(login(userData))
  }
}

export default connect(null, mapDispatchToProps)(Login);
