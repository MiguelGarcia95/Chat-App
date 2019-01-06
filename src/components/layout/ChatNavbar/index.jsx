import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createChatroom, getChatrooms, chatroomRedirect} from '../../../redux/actions/chatroomActions';
import ChatroomModal from '../ChatroomModal/';

import './style.css';

class ChatNavbar extends React.Component {
  state = {
    chatroomModal: false,
    chatroomName: '',
    avatar: 'https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg',
    user: this.props.user
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.chatroomRedirect();
      setTimeout( nextProps.history.push(`/chatroom/${nextProps.currentChatroomID.id}`), 1500);
    } 
  }
  

  componentDidMount() {
    this.props.getChatrooms();
  }

  handleChatroomSubmit = () => {
    this.props.createChatroom(this.state); 
  }

  handleChange = (e) => this.setState({[e.target.name]: e.target.value});

  openModal = () => this.setState({chatroomModal: true});

  closeModal = () => this.setState({chatroomModal: false});

  displayChatrooms = chatrooms => {
    return chatrooms.map(chatroom => {
      return (
        <Link to={`chatroom/${chatroom.id}`} key={chatroom.id}>
          <section className="channel-icon">
            <img src={chatroom.chatroom.avatar} alt={chatroom.chatroom.name} />
          </section>
        </Link>
      )
    })
  }

  render () {
    const {chatroomModal} = this.state;
    const {chatrooms} = this.props;
    return (
      <nav className="nav-bar">
        <ChatroomModal
          isOpen={chatroomModal}
          onClickClose={this.closeModal}
          handleChange={this.handleChange}
          handleChatroomSubmit={this.handleChatroomSubmit}
        />
        <section className="logo">
          <img src="/img/ChatLogo.png" alt="" />
        </section>
        <section className="add-icon" onClick={this.openModal}>
          <i className="fas fa-plus fa-2x" ></i>
        </section>
        <section className="channel-icons">
          {this.displayChatrooms(chatrooms)}
        </section>
      </nav>
    )
  }
}

ChatNavbar.propTypes = {
  user: PropTypes.object.isRequired,
  createChatroom: PropTypes.func.isRequired,
  chatrooms: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    chatrooms: state.chatroom.chatrooms,
    currentChatroomID: state.chatroom.currentChatroomID,
    redirect: state.chatroom.redirect
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChatroom: (newChatroom) => dispatch(createChatroom(newChatroom)),
    getChatrooms: () => dispatch(getChatrooms()),
    chatroomRedirect: () => dispatch(chatroomRedirect())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatNavbar);
