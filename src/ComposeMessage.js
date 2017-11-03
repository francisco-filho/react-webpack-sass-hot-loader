import React, {Component} from 'react'

export default class ComposeMessage extends Component {
  constructor(){
    super()
    this.state = {message: ''}
    this.onInputChange = this.onInputChange.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  onInputChange(e){
    const message = e.target.value
    if (!message || /^\s*$/.test(message))
      return
    this.setState({message: e.target.value})
  }

  onButtonClick(e){
    const {onMessage} = this.props
    onMessage && onMessage(this.state.message)
    this.setState({message: ''})
    e.preventDefault()
  }

  render(){
    return <div className="compose-message form-row">
      <input
        value={this.state.message}
        onChange={this.onInputChange} />
      <button className="primary" onClick={this.onButtonClick}>Add message</button>
    </div>
  }
}