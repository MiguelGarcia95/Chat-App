import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getChatroom} from '../../../redux/actions/chatroomActions';

import ChatMenu from '../../layout/ChatMenu/';
import ChatPanel from '../../layout/ChatPanel/';

class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id,
    user: this.props.user
  }

  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
  }

  render() {
    const {user} = this.state;
    return (
      <section id="app">
        <ChatMenu user={user} />
        <ChatPanel user={user} />
      </section>
    )
  }
}

Chatroom.propTypes = {
  getChatroom: PropTypes.func.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: (chatroomID) => dispatch(getChatroom(chatroomID))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chatroom);
