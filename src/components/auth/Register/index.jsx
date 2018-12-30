import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {signUp} from '../../../redux/actions/authActions';
import './style.css';

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    confirmedPassword: '',
    errors: [],
    loading: false
  }

  handleInputChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.props.signUp(this.state);
    }
  }

  isFormValid = () => {
    if (!this.isFormEmpty(this.state)) {

    } else {
      return false;
    }
  }

  isFormEmpty = ({username, email, password, confirmedPassword}) => {
    return !username.length || !email.length || !password.length || !confirmedPassword.length;
  }

  isPasswordValid = ({password, confirmedPassword}) => {
    if ((password.length < 6 || confirmedPassword.length < 6) || password !== confirmedPassword) {
      return false;
    } else {
      return true;
    }
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

Register.propTypes = {
  signUp: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(null, mapDispatchToProps)(Register);
