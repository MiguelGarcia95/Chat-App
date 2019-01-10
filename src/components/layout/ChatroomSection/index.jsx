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
    // this.props.getCategoryChannels(this.props.category.category.chatroomId, this.props.category.id);
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.props.getCategoryChannels(nextProps.category.category.chatroomId, nextProps.category.id);

  }

  toggleSection = () => this.setState({isOpen: !this.state.isOpen});

  displayChannels = (channels) => {
    console.log(channels.category)

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
  // return {
  //   currentChatroom: state.chatroom.currentChatroom
  // }
}

const mapDispatchToProps = dispatch => {
  return {
    getCategoryChannels: (chatroomId, categoryId) => dispatch(getCategoryChannels(chatroomId, categoryId))
  }
}

export default connect(mapStateToProps)(ChatroomSection);
// export default ChatroomSection
