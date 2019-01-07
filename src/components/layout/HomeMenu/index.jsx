import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const HomeMenu = ({user}) => {
  return (
    <section className="menu-bar">
      <section className="top-menu">
        <section className="option first">
          <i className="fas fa-chart-line fa-2x"></i><p> Activities</p>
        </section>
        <section className="option active">
          <i className="fas fa-user-circle fa-2x"></i><p> Friends</p>
        </section>
      </section>
      <section className="direct-messages">
        <p className="title">Direct Messages</p>
        <section className="messages">
          <section className="message online">
            <section className="avatar">
              <img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" />
              <section className="dot"><section className="light"></section></section>
            </section>
            <section className="name"><p>Holy Coffee Cup</p></section>
          </section>

          <section className="message pending">
            <section className="avatar">
              <img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" />
              <section className="dot"><section className="light"></section></section>
            </section>
            <section className="name"><p>Holy Coffee Cup</p></section>
          </section>

          <section className="message offline">
            <section className="avatar">
              <img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" />
              <section className="dot"><section className="light"></section></section>
            </section>
            <section className="name"><p>Holy Coffee Cup</p></section>
          </section>

          <section className="message online">
            <section className="avatar">
              <img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" />
              <section className="dot"><section className="light"></section></section>
            </section>
            <section className="name"><p>Holy Coffee Cup</p></section>
          </section>

        </section>
      </section>
    </section>
  )
}

HomeMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default HomeMenu;
