import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/authActions';
import './style.css';

const SettingsModal = (props) => {
  const classes =  props.isOpen ? 'open' : '';
  return (
    <section className={`settingsModal ${classes}`}>
      <section className="exit">
        <i className="fas fa-times fa-2x" onClick={props.onClickClose}></i>
      </section>
      <section className='modal'>
        <section className="nav-menu">
          <section className='menu-item'><p>Color Theme</p></section>
          <section className='menu-item menu-close' onClick={props.logout}>
            <p>Log Out</p>
            <i className="fas fa-power-off fa-2x"></i>
          </section>
        </section>
        <section className="menu-settings">
        </section>
      </section>
    </section>
  )
}

SettingsModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClickClose: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(SettingsModal);
