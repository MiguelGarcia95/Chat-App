import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import './style.css';
import ChatroomSection from '../ChatroomSection/';

class ChatMenu extends React.Component {
  state = {
    user: this.props.user,
    chatroom: this.props.chatroom,
    categories: this.props.categories,
    displaySettings: true
  }

  toggleSettings = () => this.setState({displaySettings: !this.state.displaySettings});
  closeSettings = () => this.setState({displaySettings: false});

  render() {
    // pull all chatroom sections,
    // pull all channels within the chatroom, since only one will be active,
    // sort all of the channels with their approriate section and pass them thru
    const chatroomChannel = ['rpg', 'stg', 'jrpg', 'metroidvania', 'retro'];
    const {user, chatroom, displaySettings} = this.state;
    const {categories} = this.props;
    console.log(categories);
    return (
      <section className="menu-bar chatroom-menu">
        <ChatroomSection sectionName={'Game Recommendations'} channels={chatroomChannel} />
        {/* <ChatroomSection sectionName={'Discussion'} channels={chatroomChannel} /> */}
        {/* <ChatroomSection sectionName={'Ranting'} channels={chatroomChannel} /> */}
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
