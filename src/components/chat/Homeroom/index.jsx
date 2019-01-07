import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import ChatNavbar from '../../layout/ChatNavbar/';
import HomeMenu from '../../layout/HomeMenu/';
import HomePanel from '../../layout/HomePanel/';

class Homeroom extends React.Component {
  // Todo
  // Build Chat Console, chat format
  // Create and Display Sections & Comments
  render () {
    const {user, history} = this.props;
    return (
      <section id="app">
        {/* <ChatNavbar user={user} history={history} /> */}
        <HomeMenu user={user} />
        <HomePanel user={user} />
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
