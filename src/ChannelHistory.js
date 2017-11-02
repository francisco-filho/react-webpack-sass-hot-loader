import React, {Component} from 'react'

export default class ChannelHistory extends Component {
  static get defaultProps(){
    return {
      messages: []
    }
  }

  render(){
    const {messages} = this.props
    return <ul>
      { messages.map((li, key) => <li key={key}>{li}</li>) }
    </ul>;
  }
}
