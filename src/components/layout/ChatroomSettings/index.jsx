import React from 'react';
import './style.css';

export class ChatroomSettings extends React.Component {
  state  = {
    // display: this.props.display,
    // user: this.props.user,
    // chatroom: this.props.chatroom
  }

  render() {
    const {display, user, chatroom, toggle} = this.props;
    const classes = display ? 'opened' : '';
    return (
      <section className={`chatroom-settings ${classes}` }>
        <section className="options">
          <section className="option" onClick={this.props.toggleSettings}><p>Create Category</p></section>
          <section className="option"><p>Leave Server</p></section>
          <section className="option" onClick={this.props.toggle}><p>Close</p></section>
        </section>
      </section>
    )
  }
}

export default ChatroomSettings;