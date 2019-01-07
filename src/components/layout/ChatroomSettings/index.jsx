import React from 'react';

export class ChatroomSettings extends React.Component {
  state  = {
    // display: this.props.display,
    // user: this.props.user,
    // chatroom: this.props.chatroom
  }

  isUserOpOrAdmin = (chatroom, user) => {
    if (chatroom.chatroom.creatorId === user.uid) {
      console.log('You are the chat creator');
    } else {
      console.log('You are not the chat creator');
    }
  }

  render() {
    const {display, user, chatroom, toggle} = this.props;
    this.isUserOpOrAdmin(chatroom, user);
    return (
      <section className='chatroom-settings'>
        <section className="options">
          <section className="option">Leave Server</section>
        </section>
      </section>
    )
  }
}

export default ChatroomSettings;