import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Spinner from '../../layout/Spinner/';

class Homeroom extends React.Component {
  render () {
    const {isLoading} = this.props;
    return isLoading ? <Spinner /> : (
      <section id="app">
        <h1>App</h1>
      </section>
    )
  }
}

Homeroom.propTypes = {
  isLoading: PropTypes.bool.isRequired
}

const mapStateToProps = state => {
  return {
    isLoading: state.auth.isLoading
  }
}

export default connect(mapStateToProps)(Homeroom);
