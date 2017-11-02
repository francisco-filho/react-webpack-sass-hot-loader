import React, {Component} from 'react'

export default class ComposeMessage extends Component {
  constructor(){
    super()
    this.state = {message: null}
    this.onInputChange = this.onInputChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onInputChange(e){
    const message = e.target.value
    if (!message || /^\s*$/.test(message))
      return
    this.setState({message})
  }

  onButtonClick(){
    const {onMessage} = this.props
    onMessage && onMessage(this.state.message)
  }

  render(){
    return <div className="compose-message">
      <input name="message" id="message"
        onChange={this.onInputChange} />
      <button onClick={this.onButtonClick}>Add message</button>
    </div>
  }
}