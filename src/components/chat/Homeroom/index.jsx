import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createChatroom} from '../../../redux/actions/chatroomActions';

import ChatNavbar from '../../layout/ChatNavbar/';
import ChatMenu from '../../layout/ChatMenu/';
import ChatPannel from '../../layout/ChatPannel/';
import { dispatch } from 'rxjs/internal/observable/pairs';

class Homeroom extends React.Component {
  state = {
    chatRoomID: this.props.chatRoomID
  }

  // Todo
  // Build Chat Console, chat format
  // Create and Display Channels
  // Create and Display Comments
  render () {
    const {user} = this.props;
    return (
      <section id="app">
        <ChatNavbar user={user} />
        <ChatMenu user={user} />
        <ChatPannel user={user} />
      </section>
    )
  }
}

Homeroom.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser,
    chatRoomID: state.chatroom.currentChatroomId
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps)(Homeroom);
