import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Chatbox = (props) => {
  return (
    <section className="chat-box">
      <section className="input-group">
        <textarea name="comment" id="" ></textarea>
      </section>
    </section>
  )
}

Chatbox.propTypes = {
  
}

export default Chatbox;