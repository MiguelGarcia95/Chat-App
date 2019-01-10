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
    // this.props.getCategoryChannels(nextProps.category.category.chatroomID, nextProps.category.id);
  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  displayChannels = (channels) => {
    // return channels.map((channel, i) => {
    //   return (
    //     <section className="channel" key={i}><i className="fas fa-hashtag"></i> <p>{channel}</p></section>
    //   )
    // })
  } 

  render() {
    const {isOpen, sectionName} = this.state;
    const {category} = this.props;
    console.log(category)
    const classes = isOpen ? '' : 'closed';
    return (
      <section className='chatroom-section'>
        <section className='section-name' onClick={this.toggleSection}>
          <i className="fas fa-chevron-down"></i> <p>{sectionName}</p>
        </section>
        <section className={`channels ${classes}`}>
          {/* {this.displayChannels(channels)} */}
        </section>
      </section> 
    )
  }
};

const mapStateToProps = state => {
  return {
    chatroomChannels: state.chatroom.chatroomChannels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategoryChannels: (chatroomId, categoryId) => dispatch(getCategoryChannels(chatroomId, categoryId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatroomSection);
// export default ChatroomSection
