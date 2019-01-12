import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ChatroomSection from '../ChatroomSection/';

class ChatMenu extends React.Component {
  // state = {
  //   user: this.props.user,
  //   chatroom: this.props.chatroom,
  //   categories: this.props.categories
  // }

  displayCategories = (categories) => {
    return categories.map((category) => {
      return (
        <ChatroomSection 
          key={category.id} 
          sectionName={category.category.categoryName}
          category={category}
          isUserAdmin={this.props.isUserAdmin}
          toggleChannelModal={this.props.toggelChannel}
          newChannelMade={this.props.newChannelMade}
          toggleChannelState={this.props.toggleChannelState}
          setCurrentChannelId={this.props.setCurrentChannelId}
          currentChannelId={this.props.currentChannelId}
          changeChat={this.props.changeChat}
        />
      )
    })
  }

  render() {
    return (
      <section className="menu-bar chatroom-menu">
        {this.displayCategories(this.props.categories)}
      </section>
    )
  }
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;

