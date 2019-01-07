import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import './style.css';
import ChatroomSection from '../ChatroomSection/';
import ChatTitle from '../ChatTitle/';
import ChatroomSettings from '../ChatroomSettings/';

class ChatMenu extends React.Component {
  state = {
    user: this.props.user,
    chatroom: this.props.chatroom,
    displaySettings: true
  }

  openSettings = () => this.setState({displaySettings: true});
  closeSettings = () => this.setState({displaySettings: false});

  render() {
    // pull all chatroom sections,
    // pull all channels within the chatroom, since only one will be active,
    // sort all of the channels with their approriate section and pass them thru
    const chatroomChannel = ['rpg', 'stg', 'jrpg', 'metroidvania', 'retro'];
    const {user, chatroom, displaySettings} = this.state;
    return (
      <section className="menu-bar chatroom-menu">
        <ChatTitle user={user} chatroom={chatroom} toggle={this.openSettings} />
        <ChatroomSettings display={displaySettings} user={user} chatroom={chatroom} toggle={this.closeSettings} />
        {/* Chatroom section */}
        <ChatroomSection sectionName={'Game Recommendations'} channels={chatroomChannel} />
        <ChatroomSection sectionName={'Discussion'} channels={chatroomChannel} />
        <ChatroomSection sectionName={'Ranting'} channels={chatroomChannel} />
        {/* Chatroom section End */}
      </section>
    )
  }
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

// const mapStateToProps = state => {
//   return {
//     currentChatroom: state.chatroom.currentChatroom
//   }
// }

export default ChatMenu;
// export default connect(mapStateToProps)(ChatMenu);
