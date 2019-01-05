import React from 'react';
import './style.css';

class ChatroomSection extends React.Component {
  state = {
    isOpen: true,
    sectionName: this.props.sectionName,
    channels: this.props.channels
  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  displayChannels = (channels) => {
    return channels.map((channel, i) => {
      return (
        <section className="channel" key={i}><i className="fas fa-hashtag"></i> <p>{channel}</p></section>
      )
    })
  } 

  render() {
    const {isOpen, sectionName, channels} = this.state;
    const classes = isOpen ? '' : 'closed';
    console.log(channels)
    return (
      <section className='chatroom-section'>
        <section className='section-name' onClick={this.toggleSection}>
          <i className="fas fa-chevron-down"></i> <p>{sectionName}</p>
        </section>
        <section className={`channels ${classes}`}>
          {this.displayChannels(channels)}
        </section>
      </section> 
    )
  }
};

export default ChatroomSection
