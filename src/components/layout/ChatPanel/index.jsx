import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class ChatPannel extends React.Component {
  render () {
    return (
      <section className="chat-panel">
        <nav className="panel-header">
          <i className="fas fa-plus fa-2x"></i>
          <span className="panel-box first"><p className="active">All</p></span>
          <span className="panel-box"><p>Online</p></span>
          <span className="panel-box"><p>Pending</p></span>
        </nav>

        <section className="friend-list">
          <section className="container">
            <section className="row-header">
              <section className="username"><p>Username</p></section>
              <section className="status"><p>Status</p></section>
            </section>

            <section className="row">
              <section className="username">
                <section className="avatar"><img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" /></section>
                <section className="name"><p>Holy Coffee Cup</p></section>
              </section>
              <section className="status">
                <section className="status-light"><section className="light online"></section></section>
                <section className="info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                </section>
              </section>
            </section>
            <section className="row">
              <section className="username">
                <section className="avatar"><img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" /></section>
                <section className="name"><p>Holy Coffee Cup</p></section>
              </section>
              <section className="status">
                <section className="status-light"><section className="light offline"></section></section>
                <section className="info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                </section>
              </section>
            </section>
            <section className="row">
              <section className="username">
                <section className="avatar"><img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" /></section>
                <section className="name"><p>Holy Coffee Cup</p></section>
              </section>
              <section className="status">
                <section className="status-light"><section className="light online"></section></section>
                <section className="info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                </section>
              </section>
            </section>
            <section className="row">
              <section className="username">
                <section className="avatar"><img src="https://uploads.disquscdn.com/images/e3a640f5ae1bf628977c502faea357f8f91eb619e66b30d00c179401f180d39b.jpg" alt="avatar" /></section>
                <section className="name"><p>Holy Coffee Cup</p></section>
              </section>
              <section className="status">
                <section className="status-light"><section className="light pending"></section></section>
                <section className="info">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
                </section>
              </section>
            </section>



          </section>
        </section>
      </section>
    )
  }
}

ChatPannel.propTypes = {
  user: PropTypes.object.isRequired
}

export default ChatPannel;
