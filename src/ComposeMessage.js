import React, {Component} from 'react'
import {connect} from 'react-redux'
import {postMessage} from "./ducks/channel";

const mapStateToProps = undefined

const mapDispatchToProps = (dispatch) => ({
  onMessage: (message) => {
    dispatch(postMessage(message))
  }
})

export class ComposeMessage extends Component {
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
    const {message} = this.state
    const {onMessage} = this.props
    if (!message || /^\s*$/.test(message))
      return

    onMessage && onMessage(this.state.message)
    this.setState({message: ''})
    e.preventDefault()
  }

  render(){
    return <div className="compose-message form-row">
      <input
        placeholder="write a message"
        value={this.state.message}
        onChange={this.onInputChange} />
      <button className="primary" onClick={this.onButtonClick}>Add message</button>
    </div>
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeMessage)