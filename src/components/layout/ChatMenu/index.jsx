import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Userbar from '../Userbar';
import ChatroomSection from '../ChatroomSection/';

const ChatMenu = ({user}) => {
  return (
    <section className="menu-bar chatroom-menu">
      <Userbar user={user} />
      {/* Chatroom section */}
      <ChatroomSection sectionName={'Game Recommendations'} />
      

      {/* Chatroom section End */}
    </section>
  )
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;
