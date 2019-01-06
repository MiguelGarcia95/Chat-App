import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ChatPannel extends React.Component {
  render () {
    return (
      <section className="chat-panel">
        <nav className="chatroom-header">
          <i className="fas fa-hashtag"></i> <p>RPG - Give us your favorite games of the genre.</p>
        </nav>

        <section className="comments">

          <section className="comment-container">
            <section className="avatar">
              <img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" />
            </section>

            <section className="content">
              <section className="top">
                <section className="username"><p>Vortt</p></section>
                <section className="date"><p>Today @ 11:50 am</p></section>
              </section>
              <section className="bottom">
                <section className="comment">
                  <p>NieR is an amazing game. The gameplay may not be praiseworthy, but the world is amazing. It makes you care about the characters.</p>
                </section>
              </section>
            </section>
          </section>

        </section>
 
         <section className="chat-box">
           <section className="input-group">
             <textarea name="comment" id="" ></textarea>
           </section>
         </section>

      </section>
    )
  }
}

ChatPannel.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatPannel;
