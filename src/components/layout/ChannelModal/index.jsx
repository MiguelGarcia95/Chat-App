import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const ChannelModal = (props) => {
  // const classes =  true ? 'open' : '';
  const classes =  props.display ? 'open' : '';
  return (
    <section className={`chatroom-modal ${classes}`}>
      <section className='modal'>
        <section className="exit">
          <i className="fas fa-times fa-2x" onClick={props.toggle}></i>
        </section>
        <section className="input-group">
          <label htmlFor="chatroomName">Chatroom Name</label>
          <input type="text" name='chatroomName' placeholder='Chatroom Name' onChange={props.handleChange}/>
        </section>
        <section className="input-group">
          {/* <input type='file' name='chatroom-avatar' className='custom-file-upload' /> */}
            <label className="custom-file-upload">
              <input type="file"/> Upload Avatar
            </label>
        </section>
        <button className="modal-submit" onClick={props.handleChannelSubmit}>Create</button>
      </section>
    </section>
  )
}

// ChannelModal.propTypes = {
//   onClickClose: PropTypes.func.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   handleChatroomSubmit: PropTypes.func.isRequired
// }

export default ChannelModal;
