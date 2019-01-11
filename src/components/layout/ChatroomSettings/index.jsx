import React from 'react';
import './style.css';

class ChatroomSettings extends React.Component {
  render() {
    const {display} = this.props;
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