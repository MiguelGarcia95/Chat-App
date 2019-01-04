import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getChatroom} from '../../../redux/actions/chatroomActions';


class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id
  }

  componentDidMount() {
    this.props.getChatroom(this.props.match.params.id);
  }
  

  render() {
    return (
      <div>
        <p>{this.state.chatroomID}</p>
      </div>
    )
  }
}

Chatroom.propTypes = {
  getChatroom: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => {
  return {
    getChatroom: (chatroomID) => dispatch(getChatroom(chatroomID))
  }
}

export default connect(null, mapDispatchToProps)(Chatroom);
