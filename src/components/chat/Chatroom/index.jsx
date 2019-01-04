import React from 'react'

class Chatroom extends React.Component {
  state = {
    chatroomID: this.props.match.params.id
  }
  render() {
    return (
      <div>
        chatroom here
      </div>
    )
  }
}

export default Chatroom
