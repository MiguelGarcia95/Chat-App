import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getChannelChat, getChannelComments } from '../../../redux/actions/chatroomActions';

import Comments from '../Comments/';
import Chatbox from '../Chatbox/';
import './style.css';

class ChatPannel extends React.Component {
  state = {
    channelId: ''
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    if (nextProps.currentChannelId) {
      if (nextProps.channel === null || nextProps.currentChannelId !== this.state.channelId) {
        this.setState({channelId: nextProps.currentChannelId});
        nextProps.getChannelChat(nextProps.chatroomId, nextProps.currentCategoryId, nextProps.currentChannelId)
        nextProps.getChannelComments(nextProps.chatroomId, nextProps.currentCategoryId, nextProps.currentChannelId)
      }
    }
  }
  
  render () {
    const {channel, chatroomId, currentCategoryId, user} = this.props;

    if (!channel) {
      return <section className="chat-panel"></section>
    } else {
      const channelData = channel.channel
      return (
        <section className="chat-panel">
          <nav className="chatroom-header">
            <i className="fas fa-hashtag"></i> <p>{channelData.channelName} - {channelData.channelDescription}</p>
          </nav>
  
          <Comments />
          <Chatbox chatroomId={chatroomId} categoryId={currentCategoryId} channelId={channel.id} user={user} />   
  
        </section>
      )
    }
  }
}

ChatPannel.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    channel: state.chatroom.channel,
    comments: state.chatroom.comments
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChannelChat: (chatroomId, categoryId, channelId) => dispatch(getChannelChat(chatroomId, categoryId, channelId)),
    getChannelComments: (chatroomId, categoryId, channelId) => dispatch(getChannelComments(chatroomId, categoryId, channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPannel);
