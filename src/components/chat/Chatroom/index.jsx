import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getChatroom, redirectToHome, createChatroomCategory} from '../../../redux/actions/chatroomActions';

import ChatMenu from '../../layout/ChatMenu/';
import ChatPanel from '../../layout/ChatPanel/';
import Userbar from '../../layout/Userbar';
import ChatTitle from '../../layout/ChatTitle/';
import ChatroomSettings from '../../layout/ChatroomSettings/';

class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id,
    user: this.props.user,
    redirect: this.props.redirect,
    displaySettings: false
  }

  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.redirect) {
      this.props.redirectToHome();
      setTimeout( nextProps.history.push('/'), 2500);
    } 
  }

  toggleSettings = () => this.setState({displaySettings: !this.state.displaySettings});

  render() {
    const {user, displaySettings} = this.state;
    const {chatroomExists, chatroom} = this.props;
    return !chatroomExists ? (<section>test</section>) : (
      <section id="app">
        <ChatMenu user={user} chatroom={chatroom} />
        <ChatTitle user={user} chatroom={chatroom} toggle={this.toggleSettings} />
        <ChatroomSettings display={displaySettings} user={user} chatroom={chatroom} toggle={this.toggleSettings} />
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
    redirect: state.chatroom.redirectToHome
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: (chatroomID) => dispatch(getChatroom(chatroomID)),
    redirectToHome: () => dispatch(redirectToHome()),
    createChatroomCategory: (category) => dispatch(createChatroomCategory(category))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
