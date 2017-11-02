import React from 'react'
import ChannelHistory from "./ChannelHistory";
import ComposeMessage from "./ComposeMessage";

export default class App extends React.Component {

  constructor(){
    super()
    this.state = { messages: []}
    this.onMessage = this.onMessage.bind(this)
  }

  onMessage(e){
    this.setState((prevState) => {
      return {
        messages: prevState.messages.concat([e])
      }
    })
  }

  render(){
    const { messages } = this.state
    return <div>
      <h1>Messages</h1>
      <ChannelHistory messages={messages}/>
      <ComposeMessage onMessage={ this.onMessage }/>
    </div>
  }
}