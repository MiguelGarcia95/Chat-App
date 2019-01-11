import React from 'react';
import PropTypes from 'prop-types';
// import {connect} from 'react-redux';
import './style.css';
import ChatroomSection from '../ChatroomSection/';
// import { getCategoryChannels } from '../../../redux/actions/chatroomActions';

class ChatMenu extends React.Component {
  state = {
    user: this.props.user,
    chatroom: this.props.chatroom,
    categories: this.props.categories,
    currentChannelId: ''
  }

  setCurrentChannelId = (channelId) => {
    this.setState({currentChannelId: channelId});
    console.log(channelId)
  } 

  displayCategories = (categories) => {
    return categories.map((category) => {
      return (
        <ChatroomSection 
          key={category.id} 
          sectionName={category.category.categoryName}
          category={category}
          isUserAdmin={this.props.isUserAdmin}
          toggleChannelModal={this.props.toggelChannel}
          newChannelMade={this.props.newChannelMade}
          toggleChannelState={this.props.toggleChannelState}
          setCurrentChannelId={this.setCurrentChannelId}
          currentChannelId={this.state.currentChannelId}
        />
      )
    })
  }

  render() {
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
