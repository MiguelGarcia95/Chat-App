import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getChannelChat } from '../../../redux/actions/chatroomActions';

import Comments from '../Comments/';
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
      }
    }
  }

  render () {
    const {channel} = this.props;

    if (!channel) {
      return <p></p>
    } else {
      const channelData = channel.channel
      return (
        <section className="chat-panel">
          <nav className="chatroom-header">
            <i className="fas fa-hashtag"></i> <p>{channelData.channelName} - {channelData.channelDescription}</p>
          </nav>
  
          
   
           <section className="chat-box">
             <section className="input-group">
               <textarea name="comment" id="" ></textarea>
             </section>
           </section>
  
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
    getChannelChat: (chatroomId, categoryId, channelId) => dispatch(getChannelChat(chatroomId, categoryId, channelId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatPannel);
