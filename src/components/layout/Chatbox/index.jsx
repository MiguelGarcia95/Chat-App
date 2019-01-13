import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createChannelComment } from '../../../redux/actions/chatroomActions';
import './style.css';

class Chatbox extends React.Component {
  state = {
    content: '',
    username: this.props.user.displayName,
    userId: this.props.user.uid,
    userAvatar: this.props.user.photoURL,
    chatroomId: this.props.chatroomId,
    categoryId: this.props.categoryId,
    channelId: this.props.channelId
  }


  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.createChannelComment(this.state);
  }

  onChange = e => this.setState({[e.target.name]: e.target.value})


  render() {
    return (
      <section className="chat-box">
        <section className="input-group">
          <form onSubmit={this.onFormSubmit}>
            <input name="content" id="" onChange={this.onChange} value={this.state.content} />
          </form>
        </section>
      </section>
    )
  }
}

Chatbox.propTypes = {
  user: PropTypes.object.isRequired,
  chatroomId: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  channelId: PropTypes.string.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    createChannelComment: (comment) => dispatch(createChannelComment(comment))
  }
}

export default connect(null, mapDispatchToProps)(Chatbox);