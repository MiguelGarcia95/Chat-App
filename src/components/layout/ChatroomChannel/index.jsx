import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChatroomChannel = (props) => {
  const {channel, categoryId} = props;
  return (
    <section onClick={props.setCurrentChanneAndCategorylId.bind(null, categoryId, channel.id)} className='channel' key={channel.id}>
      <i className="fas fa-hashtag"></i> <p>{channel.channelData.channelName}</p>
    </section>
  )
}

ChatroomChannel.propTypes = {
  setCurrentChanneAndCategorylId: PropTypes.func.isRequired,
  channel: PropTypes.object.isRequired,
  categoryId: PropTypes.string.isRequired
}

export default ChatroomChannel;
