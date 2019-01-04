import React from 'react'

class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id
  }
  render() {
    return (
      <div>
        <p>{this.state.chatroomID}</p>
      </div>
    )
  }
}

export default Chatroom
