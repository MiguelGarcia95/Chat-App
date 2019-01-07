import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getChatroom, redirectToHome} from '../../../redux/actions/chatroomActions';

import ChatMenu from '../../layout/ChatMenu/';
import ChatPanel from '../../layout/ChatPanel/';

class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id,
    user: this.props.user,
    redirect: this.props.redirect
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

  render() {
    const {user} = this.state;
    const {chatroomExists, chatroom} = this.props;
    const random = () => {
      return (
        <section></section>
      )
    }
    return !chatroomExists ? random : (
      <section id="app">
        <ChatMenu user={user} chatroom={chatroom} />
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
    redirectToHome: () => dispatch(redirectToHome())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
