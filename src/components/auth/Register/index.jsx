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

  UNSAFE_componentWillReceiveProps(newProps) {
    if (newProps.errors === null) {
      this.setState({errors: []})
    } else {
      this.setState({errors: [{message: newProps.errors}]})
    }
  }

  handleInputChange = e => this.setState({[e.target.name]: e.target.value});

  handleSubmit = e => {
    e.preventDefault();
    if (this.isFormValid()) {
      this.props.signUp(this.state);
    }
  }

  isFormValid = () => {
    let errors = [];
    let error;

    if (this.isFormEmpty(this.state)) {
      error = {message: 'Fill in all the fields!'};
      this.setState({errors: errors.concat(error)});
      return false;
    } else if (!this.isPasswordValid(this.state)) {
      error = {message: 'Password is not valid.'};
      this.setState({errors: errors.concat(error)});
      return false;
    } else if (!this.isConfirmedPasswordValid(this.state)) {
      error = {message: 'Confirm Password is not valid.'};
      this.setState({errors: errors.concat(error)});
      return false;
    } else {
      return true;
    }
  }

  isFormEmpty = ({username, email, password, confirmedPassword}) => {
    return !username.length || !email.length || !password.length || !confirmedPassword.length;
  }

  isPasswordValid = ({password}) => (password.length < 6) ? false : true;

  isConfirmedPasswordValid = ({password, confirmedPassword}) => {
    return password !== confirmedPassword ? false : true;
  }

  displayErrors = errors => errors.map((error, i) => {
    return <p className='auth-error' key={i}>{error.message}</p>
  });

  render () {
    const {errors} = this.state;
    return (
      <section id="app">
        {(errors.length > 0 )&& (
          <section className="auth-errors">
            {this.displayErrors(errors)}
          </section>
        )}
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
              <input type="password" name='password' placeholder='Password, Min of 6 letters' onChange={this.handleInputChange}/>
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

const mapStateToProps = state => {
  return {
    errors: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
