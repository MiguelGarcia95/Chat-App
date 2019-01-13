import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Chatbox extends React.Component {
  render() {
    return (
      <section className="chat-box">
        <section className="input-group">
          <textarea name="comment" id="" ></textarea>
        </section>
      </section>
    )
  }
}

Chatbox.propTypes = {
  
}

export default Chatbox;