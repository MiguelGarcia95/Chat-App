import React from 'react';

const ChatTitle = (props) => {
  console.log(props)
  return (
    <section className="chat-title">
      <section className="title-row">
        <section className="title"><p></p></section>
        <section className="title-icon"><i className="fas fa-ellipsis-v"></i></section>
      </section>
    </section>
  )
}

export default ChatTitle;