import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteMessageAtIndex} from './ducks/channel'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   onRemove: (id) => dispatch(deleteMessageAtIndex(id))
// })
const mapDispatchToProps = {
  onRemove: deleteMessageAtIndex
}

export class ChannelHistory extends Component {
  static get defaultProps(){
    return {
      messages: []
    }
  }
  render(){
    const {messages, onRemove} = this.props
    return <ul className="channel-history">
      { messages.map((li, key) => <ChannelMessage key={key}
                                                  message={li}
                                                  onRemove={e => onRemove(key)}
      />) }
    </ul>;
  }
}

export const ChannelMessage = ({message, onRemove}) => (
  <li>{message} <span onClick={onRemove}>X</span></li>
)

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHistory)