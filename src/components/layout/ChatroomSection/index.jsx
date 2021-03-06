import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import { getCategoryChannels } from '../../../redux/actions/chatroomActions';
import ChatroomChannel from '../ChatroomChannel/';

class ChatroomSection extends React.Component {
  state = {
    isOpen: true,
    sectionName: this.props.sectionName,
    channels: [],
    categoryId: this.props.category.id
  }

  componentDidMount() {
    this.props.getCategoryChannels(this.props.category.category.chatroomID, this.props.category.id);
    this.setState({channels: this.props.channels})
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({channels: this.props.channels})
    if(this.props.newChannelMade) {
      this.props.toggleChannelState();
      this.props.getCategoryChannels(this.props.category.category.chatroomID, this.props.category.id);
    }
  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  displayChannels = (channels) => {
    let categoryChannels = this.sortChannels(channels);
    if (categoryChannels.length > 0) {
      //only for testing
      if (this.props.currentChannelId === null) {
        this.props.setCurrentChanneAndCategorylId(this.props.category.id, categoryChannels[0].id);
      }
      return categoryChannels.map((channel) => {
        return (
          <ChatroomChannel key={channel.id} categoryId={this.props.category.id} channel={channel} setCurrentChanneAndCategorylId={this.props.setCurrentChanneAndCategorylId} />
        )
      })
    }
  }

  sortChannels = (channels) => {
    let matchingChannels = [];
    channels.forEach(channel => {
      if (channel.id === this.props.category.id) {
        matchingChannels = channel.channels;
      }
    })
    return matchingChannels;
  }

  render() {
    const {isOpen, sectionName} = this.state;
    const {isUserAdmin, category, channels} = this.props;
    const classes = isOpen ? '' : 'closed';
    const iconClass = isOpen ? 'fa-chevron-up' : 'fa-chevron-down';
    return (
      <section className='chatroom-section'>
        <section className='section-name'>
          <i onClick={this.toggleSection} className={`fas ${iconClass}`}></i> 
          {isUserAdmin && <i onClick={this.props.toggleChannelModal.bind(null, category)} className="fas fa-plus fas2"></i> }
          <p>{sectionName}</p>
        </section>
        <section className={`channels ${classes}`}>
          {this.displayChannels(channels)}
        </section>
      </section> 
    )
  }
};

const mapStateToProps = state => {
  return {
    channels: state.chatroom.chatroomChannels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategoryChannels: (chatroomId, categoryId) => dispatch(getCategoryChannels(chatroomId, categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomSection);
// export default ChatroomSection
