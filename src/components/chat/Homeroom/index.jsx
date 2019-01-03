import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ChatNavbar from '../../layout/ChatNavbar/';
import ChatMenu from '../../layout/ChatMenu/';
import ChatPannel from '../../layout/ChatPannel/';

class Homeroom extends React.Component {
  state = {

  }

  // Todo
  // Build Chat Console, chat format, add avatar
  // Create and Display Channels
  // Create and Display Comments
  render () {
    const {user} = this.props;
    return (
      <section id="app">
        <ChatNavbar user={user} />
        <ChatMenu user={user} />
        <ChatPannel />
      </section>
    )
  }
}

Homeroom.propTypes = {
  user: PropTypes.object.isRequired
}

const mapStateToProps = state => {
  return {
    user: state.auth.currentUser
  }
}

export default connect(mapStateToProps)(Homeroom);
