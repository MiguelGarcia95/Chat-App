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

  displayCategories = (categories, channels) => {
    return categories.map((category) => {
      return (
        <ChatroomSection 
          key={category.id} 
          sectionName={category.category.categoryName} 
          channels={category} 
        />
      )
    })
  }

  render() {
    const chatroomChannel = ['rpg', 'stg', 'jrpg', 'metroidvania', 'retro'];
    const {user, chatroom, displaySettings} = this.state;
    // const {categories, channels} = this.props;
    return (
      <section className="menu-bar chatroom-menu">
        {/* {this.displayCategories(categories, channels)} */}
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
