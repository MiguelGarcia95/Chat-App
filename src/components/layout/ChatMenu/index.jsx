import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ChatroomSection from '../ChatroomSection/';

const displayCategories = (props) => {
  return props.categories.map((category) => {
    return (
      <ChatroomSection 
        key={category.id} 
        sectionName={category.category.categoryName}
        category={category}
        isUserAdmin={props.isUserAdmin}
        toggleChannelModal={props.toggelChannel}
        newChannelMade={props.newChannelMade}
        toggleChannelState={props.toggleChannelState}
        setCurrentChanneAndCategorylId={props.setCurrentChanneAndCategorylId}
        currentChannelId={props.currentChannelId}
        changeChat={props.changeChat}
      />
    )
  })
}

const ChatMenu = (props) => {
  return (
    <section className="menu-bar chatroom-menu">
      {displayCategories(props)}
    </section>
  )
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;

