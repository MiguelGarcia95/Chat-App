import React from 'react';
import './style.css';

const ChatTitle = (props) => {
  const {chatroom} = props;
  return (
    <section className="chat-title">
      <section className="title-row">
        <section className="title"><p>{chatroom.chatroom.name}</p></section>
        <section className="title-icon">
          <i className="fas fa-ellipsis-v" onClick={props.toggle}></i>
        </section>
      </section>
    </section>
  )
}

export default ChatTitle;