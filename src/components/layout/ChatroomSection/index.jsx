import React from 'react';
import './style.css';

class ChatroomSection extends React.Component {
  state = {
    isOpen: true,
    sectionName: this.props.sectionName
  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  displayChannels = (channels) => {
    console.log(Object.keys(channels))

    // return channels.map((channel, i) => {
    //   return (
    //     <section className="channel" key={i}><i className="fas fa-hashtag"></i> <p>{channel}</p></section>
    //   )
    // })
  } 

  render() {
    const {isOpen, sectionName} = this.state;
    const {channels} = this.props;
    const classes = isOpen ? '' : 'closed';
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
