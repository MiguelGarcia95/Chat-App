import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import HomeMenu from '../../layout/HomeMenu/';
import HomePanel from '../../layout/HomePanel/';
import Userbar from '../../layout/Userbar';


const Homeroom = (props) => {
    const {user} = props;

    return !user ? <section id="app"></section> : (
      <section id="app">
        <HomeMenu user={user} />
        <Userbar user={user} />
        <HomePanel user={user} />
      </section>
    )

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
