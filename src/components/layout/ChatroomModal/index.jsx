import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logout} from '../../../redux/actions/authActions';
import './style.css';

const ChatroomModal = (props) => {
  const classes =  props.isOpen ? 'open' : '';
  // const classes =  true ? 'open' : '';
  return (
    <section className={`chatroom-modal ${classes}`}>
      <section className='modal'>
        <section className="exit">
          <i className="fas fa-times fa-2x" onClick={props.onClickClose}></i>
        </section>
        <section className="input-group">
          <label htmlFor="chatroom-name">Chatroom Name</label>
          <input type="text" name='chatroom-name' placeholder='Chatroom Name'/>
        </section>
        <section className="input-group">
          {/* <input type='file' name='chatroom-avatar' className='custom-file-upload' /> */}
            <label className="custom-file-upload">
              <input type="file"/> Upload Avatar
            </label>
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
