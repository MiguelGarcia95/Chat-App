import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ChatroomChannel extends React.Component {
  state = {
    channel: this.props.channel,
    categoryId: this.props.categoryId
  }
  doesItbelongHere = (channel) => {
    if (channel.channelData.categoryId === this.state.categoryId) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const {channel, categoryId} = this.state;
    console.log(channel.channelData)
    if (this.doesItbelongHere(channel)) {
      return (
        <section className={`channel ${categoryId}`} key={channel.id}><i className="fas fa-hashtag"></i> <p>{channel.channelData.channelName}</p></section>
      )
    } else {
      return (
        <p>Loading</p>
      )
    }
  }
}

// ChatroomChannel.propTypes = {
//   onClickClose: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleChatroomSubmit: PropTypes.func.isRequired
// }

export default ChatroomChannel;
