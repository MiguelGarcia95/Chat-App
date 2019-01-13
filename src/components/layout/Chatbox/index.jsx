import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createChannelComment } from '../../../redux/actions/chatroomActions';

import './style.css';

class Chatbox extends React.Component {
  state = {
    content: '',
    username: '',
    userAvatar: ''
  }
  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.content)
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})


  render() {
    return (
      <section className="chat-box">
        <section className="input-group">
          <form onSubmit={this.onFormSubmit}>
            <input name="content" id="" onChange={this.onChange} value={this.state.content} />
          </form>
        </section>
      </section>
    )
  }
}

Chatbox.propTypes = {
  
}

const mapDispatchToProps = dispatch => {
  return {
    createChannelComment: (comment) => dispatch(createChannelComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(Chatbox);