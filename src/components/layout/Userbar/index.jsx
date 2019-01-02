import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Userbar = (props) => {
  return (
    <section className="userbar">
      <section className="avatar">
        <img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" />
        <section className="dot"><section className="light"></section></section>
      </section>
      <section className="name"><p>Username</p></section>
      <section className="setting-box">
        <i className="fas fa-cog fa-lg"></i>
      </section>
    </section>
  )
}

export default Userbar