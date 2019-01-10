import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import './style.css';
import ChatroomSection from '../ChatroomSection/';
import { getCategoryChannels } from '../../../redux/actions/chatroomActions';

class ChatMenu extends React.Component {
  state = {
    user: this.props.user,
    chatroom: this.props.chatroom,
    categories: this.props.categories,
    displaySettings: true
  }

  toggleSettings = () => this.setState({displaySettings: !this.state.displaySettings});
  closeSettings = () => this.setState({displaySettings: false});

  displayCategories = (categories) => {
    return categories.map((category) => {
      return (
        <ChatroomSection 
          key={category.id} 
          sectionName={category.category.categoryName}
          category={category}
          categoryId={category.id}
          chatroomId={category.category.chatroomID}
        />
      )
    })
  }

  render() {
    const chatroomChannel = ['rpg', 'stg', 'jrpg', 'metroidvania', 'retro'];
    const {user, chatroom, displaySettings} = this.state;
    const {categories} = this.props;
    return (
      <section className="menu-bar chatroom-menu">
        {this.displayCategories(categories)}
      </section>
    )
  }
}

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

// const mapStateToProps = state => {
//   // return {
//   //   currentChatroom: state.chatroom.currentChatroom
//   // }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     getCategoryChannels: (chatroomId, categoryId) => dispatch(getCategoryChannels(chatroomId, categoryId))
//   }
// }

export default ChatMenu;
// export default connect(mapStateToProps)(ChatMenu);
