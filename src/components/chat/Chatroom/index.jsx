import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  getChatroom, redirectToHome, createChatroomCategory, chatClicked, getChatroomCategories, createCategoryChannel
} from '../../../redux/actions/chatroomActions';

import ChatMenu from '../../layout/ChatMenu/';
import ChatPanel from '../../layout/ChatPanel/';
import Userbar from '../../layout/Userbar';
import ChatTitle from '../../layout/ChatTitle/';
import ChatroomSettings from '../../layout/ChatroomSettings/';
import CreateCategoryModal from '../../layout/CreateCategoryModal/';
import ChannelModal from '../../layout/ChannelModal/';

class Chatroom extends React.Component {
  state = {
    redirect: this.props.redirect,
    displayChatSettings: false,
    displayCategoryModal: false,
    changeChat: false,
    isUserCreator: false,
    ranIsUcerCreator: false,
    displayChannelModal: false,
    newChannelMade: false,
    categoryId: null,
    categoryName: '',
    channelName: '',
    channelDescription: '',
    currentChannelId: null,
    currentCategoryId: null
  }

  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
    this.props.getChatroomCategories(this.props.match.params.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.redirectToHome();
      setTimeout( nextProps.history.push('/'), 2500);
    }
    if (nextProps.newChatClicked) {
      this.props.chatClicked()
      this.setState({changeChat: true})
    }
    if(this.state.changeChat) {
      this.setState({changeChat: false})
      this.props.getChatroom(this.props.match.params.id);
      this.props.getChatroomCategories(this.props.match.params.id);
    }
  }

  setCurrentChanneAndCategorylId = (categoryId, channelId) => {
    this.setState({currentChannelId: channelId, currentCategoryId: categoryId});
  } 

  modalOnChange = (e) => this.setState({[e.target.name]: e.target.value});

  toggleChatSettings = () => this.setState({displayChatSettings: !this.state.displayChatSettings});
  toggleSettings = () => this.setState({displayCategoryModal: !this.state.displayCategoryModal});
  toggleChannelState = () => this.setState({newChannelMade: !this.state.newChannelMade})

  displayChannelModal = (category) => {
    this.setState({
      displayChannelModal: !this.state.displayChannelModal,
      categoryId: category.id
    })
  }

  categorySubmit = () => {
    this.props.createChatroomCategory(this.state);
    this.toggleChatSettings();
    this.toggleSettings();
  }
  
  channelSubmit = () => {
    this.props.createCategoryChannel(this.state);
    this.setState({displayChannelModal: !this.state.displayChannelModal});
  }

  isUserOpOrAdmin = () => {
    const {user, chatroom} = this.props;
    if (user !== null && chatroom !== null) {
      if (!this.state.ranIsUcerCreator) {
        this.setState({ranIsUcerCreator: true})
        if (chatroom.chatroom.creatorId === user.uid) {
          this.setState({isUserCreator: true})
        } else {
          this.setState({isUserCreator: false})
        }
      }
    }
  }

  render() {
    const {displayChatSettings, displayCategoryModal, displayChannelModal, categoryId, newChannelMade} = this.state;
    const {chatroomExists, chatroom, chatroomCategories, user} = this.props;
    return !chatroomExists ? (<section>Loading ...</section>) : (
      <section id="app">
        <ChatMenu 
          user={user} 
          chatroom={chatroom} 
          categories={chatroomCategories} 
          isUserAdmin={this.isUserOpOrAdmin} 
          toggelChannel={this.displayChannelModal} 
          newChannelMade={newChannelMade}
          toggleChannelState={this.toggleChannelState}
          setCurrentChanneAndCategorylId={this.setCurrentChanneAndCategorylId}
          currentChannelId={this.state.currentChannelId}
          changeChat={this.state.changeChat}
        />

        <ChatTitle 
          user={user} 
          chatroom={chatroom} 
          toggle={this.toggleChatSettings} 
        />

        <ChatroomSettings 
          display={displayChatSettings} 
          user={user} 
          chatroom={chatroom} 
          toggle={this.toggleChatSettings} 
          toggleSettings={this.toggleSettings}
        />

        <CreateCategoryModal 
          display={displayCategoryModal}
          handleCategorySubmit={this.categorySubmit}
          toggle={this.toggleSettings}
          categoryOnChange={this.modalOnChange}
          chatToggle={this.toggleChatSettings} 

        />

        <ChannelModal 
          display={displayChannelModal}
          toggle={this.displayChannelModal}
          handleChange={this.modalOnChange}
          categoryId={categoryId}
          handleSubmit={this.channelSubmit}
        />

        <Userbar user={user} />
        <ChatPanel 
          user={user} 
          chatroomId={chatroom.id}  
          currentChannelId={this.state.currentChannelId} 
          currentCategoryId={this.state.currentCategoryId}
        />
      </section>
    )
  }
}

Chatroom.propTypes = {
  getChatroom: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    chatroom: state.chatroom.currentChatroom,
    chatroomExists: state.chatroom.chatroomExists,
    redirect: state.chatroom.redirectToHome,
    newChatClicked: state.chatroom.newChatClicked,
    chatroomCategories: state.chatroom.chatroomCategories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: (chatroomId) => dispatch(getChatroom(chatroomId)),
    redirectToHome: () => dispatch(redirectToHome()),
    createChatroomCategory: (category) => dispatch(createChatroomCategory(category)),
    chatClicked: () => dispatch(chatClicked()),
    getChatroomCategories: (chatroomId) => dispatch(getChatroomCategories(chatroomId)),
    createCategoryChannel: (channel) => dispatch(createCategoryChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
