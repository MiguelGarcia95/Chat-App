import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import ChatroomSection from '../ChatroomSection/';

const displayCategories = (props) => {
  return props.categories.map((category) => {
    return (
      <ChatroomSection 
        key={category.id} 
        sectionName={category.category.categoryName}
        category={category}
        isUserAdmin={props.isUserAdmin}
        toggleChannelModal={props.toggelChannel}
        newChannelMade={props.newChannelMade}
        toggleChannelState={props.toggleChannelState}
        setCurrentChannelId={props.setCurrentChannelId}
        currentChannelId={props.currentChannelId}
        changeChat={props.changeChat}
      />
    )
  })
}

const ChatMenu = (props) => {
  return (
    <section className="menu-bar chatroom-menu">
      {displayCategories(props)}
    </section>
  )
}

// class ChatMenu extends React.Component {
//   displayCategories = (categories) => {
//     return categories.map((category) => {
//       return (
//         <ChatroomSection 
//           key={category.id} 
//           sectionName={category.category.categoryName}
//           category={category}
//           isUserAdmin={this.props.isUserAdmin}
//           toggleChannelModal={this.props.toggelChannel}
//           newChannelMade={this.props.newChannelMade}
//           toggleChannelState={this.props.toggleChannelState}
//           setCurrentChannelId={this.props.setCurrentChannelId}
//           currentChannelId={this.props.currentChannelId}
//           changeChat={this.props.changeChat}
//         />
//       )
//     })
//   }
//   render() {
//     return (
//       <section className="menu-bar chatroom-menu">
//         {this.displayCategories(this.props.categories)}
//       </section>
//     )
//   }
// }

ChatMenu.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatMenu;

