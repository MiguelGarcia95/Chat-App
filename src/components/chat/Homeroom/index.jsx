import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ChatNavbar from '../../layout/ChatNavbar/';
import HomeMenu from '../../layout/HomeMenu/';
import ChatPannel from '../../layout/ChatPannel/';

class Homeroom extends React.Component {
  state = {
    // chatRoomID: this.props.chatRoomID
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
        <HomeMenu user={user} />
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
    user: state.auth.currentUser
    // chatRoomID: state.chatroom.currentChatroomId
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps)(Homeroom);
