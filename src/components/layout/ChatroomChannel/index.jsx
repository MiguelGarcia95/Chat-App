import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChatroomChannel = (props) => {
  const {channel} = props;
  return (
    <section className="channel" key={channel.id}><i className="fas fa-hashtag"></i> <p>{channel.channelData.channelName}</p></section>
  )
}

// ChatroomChannel.propTypes = {
//   onClickClose: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleChatroomSubmit: PropTypes.func.isRequired
// }

export default ChatroomChannel;
