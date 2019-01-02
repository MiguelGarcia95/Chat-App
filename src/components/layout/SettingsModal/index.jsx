import React from 'react';
import PropTypes from 'prop-types';
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
          <section className='menu-item menu-close'>
            <i className="fas fa-power-off fa-2x" onClick={props.onClickClose}></i>
          </section>
        </section>
        <section className="menu-settings">
        </section>
      </section>
    </section>
  )
}

export default SettingsModal;
