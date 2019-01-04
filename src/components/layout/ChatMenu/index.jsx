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
    </section>
  )
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;
