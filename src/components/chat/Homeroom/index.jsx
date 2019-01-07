import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

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
