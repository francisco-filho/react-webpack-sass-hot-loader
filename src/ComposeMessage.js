import React, {Component} from 'react'

export default class ComposeMessage extends Component {
  constructor(){
    super()
    this.state = {message: null}
    this.onInputChange = this.onInputChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onInputChange(e){
    const value = e.target.value
    if (!value || /^\s*$/.test(value))
      return
    this.setState({message: value})
  }

  onButtonClick(){
    const {onMessage} = this.props
    onMessage && onMessage(this.state.message)
  }

  render(){
    const {message} = this.state

    return <div className="compose-message">
      <input
        name="message"
        id="message"
        onChange={this.onInputChange} />
      <button onClick={this.onButtonClick}>add message</button>
    </div>
  }
}