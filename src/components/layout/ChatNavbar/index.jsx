import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import {connect} from 'react-redux';
import {createChatroom, getChatrooms} from '../../../redux/actions/chatroomActions';
import ChatroomModal from '../ChatroomModal/';
import {BounceLoader} from 'react-spinners';

class ChatNavbar extends React.Component {
  state = {
    chatroomModal: false,
    chatroomName: '',
    avatar: 'avatar.png',
    user: this.props.user,
    chatrooms: this.props.chatrooms
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

  loadSpinner = () => {
    return (
      <BounceLoader
      sizeUnit={"px"}
      size={80}
      color={'#e1e1e1'}
      loading={true}
    />
    )
  }

  render () {
    const {chatroomModal} = this.state;
    console.log(this.props.chatrooms)
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

ChatNavbar.propTypes = {
  user: PropTypes.object.isRequired,
  createChatroom: PropTypes.func.isRequired,
  chatrooms: PropTypes.array.isRequired
}

const mapStateToProps = state => {
  return {
    chatrooms: state.chatroom.chatrooms,
    isLoading: state.chatroom.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createChatroom: (newChatroom) => dispatch(createChatroom(newChatroom)),
    getChatrooms: () => dispatch(getChatrooms())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatNavbar);
