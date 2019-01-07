import React from 'react';

export class ChatroomSettings extends React.Component {
  state  = {
    // display: this.props.display,
    // user: this.props.user,
    // chatroom: this.props.chatroom
  }

  isUserOpOrAdmin = (chatroom, user) => {
  }

  render() {
    const {display, user, chatroom, toggle} = this.props;
    console.log(user.uid);
    console.log(chatroom.chatroom);
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