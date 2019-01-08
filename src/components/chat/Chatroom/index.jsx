import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getChatroom, redirectToHome, createChatroomCategory, chatClicked} from '../../../redux/actions/chatroomActions';

import ChatMenu from '../../layout/ChatMenu/';
import ChatPanel from '../../layout/ChatPanel/';
import Userbar from '../../layout/Userbar';
import ChatTitle from '../../layout/ChatTitle/';
import ChatroomSettings from '../../layout/ChatroomSettings/';
import CreateCategoryModal from '../../layout/CreateCategoryModal/';

class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id,
    user: this.props.user,
    redirect: this.props.redirect,
    displayChatSettings: false,
    displayCategoryModal: true,
    categoryName: '',
    channelName: ''
  }

  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log('this ran')
    if (nextProps.redirect) {
      this.props.redirectToHome();
      setTimeout( nextProps.history.push('/'), 2500);
    }
    if (nextProps.newChatClicked) {
      this.props.chatClicked()
      this.props.getChatroom(this.props.match.params.id);
    }
  }

  categoryOnChange = (e) => this.setState({[e.target.name]: e.target.value});

  toggleChatSettings = () => this.setState({displayChatSettings: !this.state.displayChatSettings});
  toggleSettings = () => this.setState({displayCategoryModal: !this.state.displayCategoryModal});

  handleCategorySubmit = () => {
    this.props.createChatroomCategory(this.state);
  }

  render() {
    const {user, displayChatSettings, displayCategoryModal} = this.state;
    const {chatroomExists, chatroom} = this.props;
    return !chatroomExists ? (<section>test</section>) : (
      <section id="app">
        <ChatMenu user={user} chatroom={chatroom} />
        <ChatTitle user={user} chatroom={chatroom} toggle={this.toggleChatSettings} />
        <ChatroomSettings 
          display={displayChatSettings} 
          user={user} 
          chatroom={chatroom} 
          toggle={this.toggleChatSettings} 
          toggleSettings={this.toggleSettings}
        />
        <CreateCategoryModal 
          display={displayCategoryModal}
          handleCategorySubmit={this.handleCategorySubmit}
          toggle={this.toggleSettings}
          categoryOnChange={this.categoryOnChange}
        />
        <Userbar user={user} />
        <ChatPanel user={user} />
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
    newChatClicked: state.chatroom.newChatClicked
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: (chatroomID) => dispatch(getChatroom(chatroomID)),
    redirectToHome: () => dispatch(redirectToHome()),
    createChatroomCategory: (category) => dispatch(createChatroomCategory(category)),
    chatClicked: () => dispatch(chatClicked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
