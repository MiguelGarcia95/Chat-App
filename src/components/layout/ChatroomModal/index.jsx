import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/authActions';
import './style.css';

const ChatroomModal = (props) => {
  const classes =  true ? 'open' : '';
  return (
    <section className={`chatroom-modal ${classes}`}>
      <section className='modal'>
        <section className="exit">
          <i className="fas fa-times fa-2x" onClick={() => {}}></i>
        </section>
        <section className="input-group">
          <input type="text" name='chatroom-name'/>
        </section>
        <section className="input-group">
          <input type='file' name='chatroom-avatar'/>
        </section>
        <button className="modal-submit">Create</button>
      </section>
    </section>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    // logout: () => dispatch(logout())
  }
}

export default connect(null, mapDispatchToProps)(ChatroomModal);
