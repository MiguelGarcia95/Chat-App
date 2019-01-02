import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ChatNavbar from '../../layout/ChatNavbar/';
import ChatMenu from '../../layout/ChatMenu/';
import ChatPannel from '../../layout/ChatPannel/';
import Spinner from '../../layout/Spinner/';

class Homeroom extends React.Component {
  state = {
  }

  // Todo
  // Build Chat Console, chat format, signout, add avatar
  // Create and Display Channels
  // Create and Display Comments
  render () {
    return (
      <section id="app">
        <ChatNavbar />
        <ChatMenu />
        <ChatPannel />
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
