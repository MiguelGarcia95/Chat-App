import React from 'react';
import './style.css';

const ChatroomSection = (props) => {
  return (
    <section className="chatroom-section first">
      <section className="section-name"><i className="fas fa-chevron-down"></i> <p>Game Recommendations</p></section>
      <section className="channels">
        <section className="channel first active"><i className="fas fa-hashtag"></i> <p>rpg</p></section>
        <section className="channel"><i className="fas fa-hashtag"></i> <p>stg</p></section>
        <section className="channel"><i className="fas fa-hashtag"></i> <p>jrpg</p></section>
        <section className="channel"><i className="fas fa-hashtag"></i> <p>metroidvania</p></section>
        <section className="channel"><i className="fas fa-hashtag"></i> <p>retro</p></section>
      </section>
    </section> 
  )
};

export default ChatroomSection
