import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ChatNavbar from '../../layout/ChatNavbar/';
import ChatMenu from '../../layout/ChatMenu/';
import Messages from '../../layout/Messages/';

class Homeroom extends React.Component {
  // Todo
  // Build Chat Console, chat format, signout, add avatar
  // Create and Display Channels
  // Create and Display Comments
  render () {
    return (
      <section id="app">
        <ChatNavbar />
        <ChatMenu />
        <Messages />

      </section>
    )
  }
}

Homeroom.propTypes = {
  // isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    // isLoading: state.auth.isLoading
  }
}

export default connect(mapStateToProps)(Homeroom);
