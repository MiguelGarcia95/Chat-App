import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {connect} from 'react-redux';
import {createChatroom} from '../../../redux/actions/chatroomActions';
import ChatroomModal from '../ChatroomModal/';

class ChatNavbar extends React.Component {
  state = {
    newChatroomName: '',
    chatroomModal: false
  }

  handleChatroomSubmit = () => {
    this.props.createChatroom(this.state);
  }

  openModal = () => this.setState({chatroomModal: true});

  closeModal = () => this.setState({chatroomModal: false});

  render () {
    const {chatroomModal} = this.state;
    return (
      <nav className="nav-bar">
        <ChatroomModal isOpen={chatroomModal} onClickClose={this.closeModal} />
        <section className="logo">
          <img src="img/ChatLogo.png" alt="" />
        </section>
        <section className="add-icon" onClick={this.openModal}>
          <i className="fas fa-plus fa-2x" onClick={this.handleChatroomSubmit}></i>
        </section>
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
