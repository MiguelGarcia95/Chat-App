import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

import Userbar from '../Userbar';
import ChatroomSection from '../ChatroomSection/';

class ChatMenu extends React.Component {
  state = {
    user: this.props.user
  }
  
  render() {
    // pull all chatroom sections,
    // pull all channels within the chatroom, since only one will be active,
    // sort all of the channels with their approriate section and pass them thru
    const chatroomChannel = ['rpg', 'stg', 'jrpg', 'metroidvania', 'retro'];
    const {user} = this.state;
    return (
      <section className="menu-bar chatroom-menu">
        <Userbar user={user} />
        {/* Chatroom section */}
        <ChatroomSection sectionName={'Game Recommendations'} channels={chatroomChannel} />
        <ChatroomSection sectionName={'Discussion'} channels={chatroomChannel} />
        <ChatroomSection sectionName={'Ranting'} channels={chatroomChannel} />
        {/* Chatroom section End */}
      </section>
    )
  }
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;
