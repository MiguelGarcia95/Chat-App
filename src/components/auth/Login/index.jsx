import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {login} from '../../../redux/actions/authActions';
import './style.css';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    errors: ''
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
    this.props.login(this.state);
  }

  displayErrors = errors => errors.map((error, i) => {
    return <p className='auth-error' key={i}>{error.message}</p>
  });

  render () {
    const {email, password, errors} = this.state;
    return (
      <section id="app">
        {(errors.length > 0 )&& (
          <section className="auth-errors">
            {this.displayErrors(errors)}
          </section>
        )}
        <section className='login'>
          <section className="form-header">
            <h1>Login</h1>
          </section>
          <form onSubmit={this.handleSubmit}>
            <section className="form-group">
              <input type="email" name='email' placeholder='Email' onChange={this.handleInputChange} value={email}/>
            </section>
            <section className="form-group">
              <input type="password" name='password' placeholder='Password' onChange={this.handleInputChange} value={password}/>
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

const mapStateToProps = state => {
  return {
    errors: state.auth.authError
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (userData) => dispatch(login(userData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
