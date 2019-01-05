import React from 'react';
import './style.css';

class ChatroomSection extends React.Component {
  state = {
    isOpen: true,
    sectionName: this.props.sectionName
  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  render() {
    const {isOpen, sectionName} = this.state;
    const classes = isOpen ? '' : 'closed';

    return (
      <section className='chatroom-section first'>
        <section className='section-name' onClick={this.toggleSection}>
          <i className="fas fa-chevron-down"></i> <p>{sectionName}</p>
        </section>
        <section className={`channels ${classes}`}>
          <section className="channel first active"><i className="fas fa-hashtag"></i> <p>rpg</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>stg</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>jrpg</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>metroidvania</p></section>
          <section className="channel"><i className="fas fa-hashtag"></i> <p>retro</p></section>
        </section>
      </section> 
    )
  }
};

export default ChatroomSection
