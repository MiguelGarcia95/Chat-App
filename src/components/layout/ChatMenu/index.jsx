import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Userbar from '../Userbar';

const ChatMenu = ({user}) => {
  return (
    <section className="menu-bar chatroom-menu">
      <Userbar user={user} />
      {/* Chatroom section */}
      <section className="chatroom-section first">
        <p className="section-name"><i className="fas fa-chevron-down"></i> Game Recommendations</p>
        <section className="section-name"><i className="fas fa-chevron-down"></i> <p>Game Recommendations</p></section>
        <section className="channels">
          <section className="channel first active"><i className="fas fa-hashtag"></i> <p>rpg</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>stg</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>jrpg</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>metroidvania</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>retro</p></section>
        </section>
      </section> 
      {/* Chatroom section End */}

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

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;
