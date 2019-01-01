import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ChatNavbar extends React.Component {
  render () {
    // {/* Navigation Bar */}
    return (
      <nav className="nav-bar">
        <section className="logo">
          <img src="./logo.png" alt="" />
        </section>
        <section className="add-icon"><i className="fas fa-plus fa-2x"></i></section>
        <section className="channel-icons">
          <section className="channel-icon active"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
        </section>
      </nav>
    )
  }
}

export default ChatNavbar;