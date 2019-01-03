import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {connect} from 'react-redux';
import {createChatroom} from '../../../redux/actions/chatroomActions';
import ChatroomModal from '../ChatroomModal/';

class ChatNavbar extends React.Component {
  state = {
    newChatroomName: ''
  }

  handleChatroomSubmit = () => {
    this.props.createChatroom(this.state);
  }

  render () {
    return (
      <nav className="nav-bar">
        <ChatroomModal />
        <section className="logo">
          <img src="img/ChatLogo.png" alt="" />
        </section>
        <section className="add-icon"><i className="fas fa-plus fa-2x" onClick={this.handleChatroomSubmit}></i></section>
        <section className="channel-icons">
          <section className="channel-icon active"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
          <section className="channel-icon"></section>
        </section>
      </nav>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChatroom: (newChatroom) => dispatch(createChatroom(newChatroom))
  }
}

export default connect(null, mapDispatchToProps)(ChatNavbar);
