import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import SettingsModal from '../SettingsModal/';

class Userbar extends React.Component {
  state = {
    settingsModal: false,
    user: this.props.user
  }

  openModal = () => this.setState({settingsModal: true});

  closeModal = () => this.setState({settingsModal: false});

  render() {
    const {settingsModal, user} = this.state;
    return (
      <React.Fragment>
        <SettingsModal isOpen={settingsModal} onClickClose={this.closeModal} />
        <section className="userbar">
          <section className="avatar">
            <img src={user.photoURL} alt="avatar" />
          </section>
          <section className="name"><p>{user.displayName}</p></section>
          <section className="setting-box">
            <i className="fas fa-cog fa-lg" onClick={this.openModal}></i>
          </section>
        </section>
      </React.Fragment>
    )
  }
}

export default Userbar;
