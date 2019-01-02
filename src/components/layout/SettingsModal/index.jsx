import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const SettingsModal = (props) => {
  const classes =  props.isOpen ? 'open' : '';
  return (
    <section className="settingsModal">
      <section className={`modal ${classes}`}>
        <section className="nav-menu">
          <section className='menu-item'><p>Color Theme</p></section>
          <section className='menu-item menu-close'>
            <i class="fas fa-power-off fa-2x" onClick={props.onClickClose}></i>
          </section>
        </section>
        <section className="menu-settings">
        </section>
      </section>
    </section>
  )
}

export default SettingsModal;
