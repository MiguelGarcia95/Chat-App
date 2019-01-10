import React from 'react';
import './style.css';
import {connect} from 'react-redux';
import { getCategoryChannels } from '../../../redux/actions/chatroomActions';

class ChatroomSection extends React.Component {
  state = {
    isOpen: true,
    sectionName: this.props.sectionName
  }

  componentDidMount() {
    this.props.getCategoryChannels(this.props.category.category.chatroomID, this.props.category.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  displayChannels = (channels) => {
    if (channels.length > 0) {
      return channels.map((channel) => {
        return (
          <section className="channel" key={channel.id}><i className="fas fa-hashtag"></i> <p>{channel.channelData.channelName}</p></section>
        )
      })
    }
  }

  displayChannelModal = () => {
    console.log('test')
  }

  render() {
    const {isOpen, sectionName} = this.state;
    const {channels, isUserAdmin, category} = this.props;
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
