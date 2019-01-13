import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

class Chatbox extends React.Component {
  state = {
    content: ''
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log('test')
  }
  render() {
    return (
      <section className="chat-box">
        <section className="input-group">
          <form onSubmit={this.onFormSubmit}>
            <input name="comment" id="" />
            {/* <textarea name="comment" id="" ></textarea> */}
          </form>
        </section>
      </section>
    )
  }
}

Chatbox.propTypes = {
  
}

export default Chatbox;