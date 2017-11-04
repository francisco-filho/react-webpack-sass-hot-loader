import React, {Component} from 'react'
import {connect} from 'react-redux'
import {deleteMessageAtIndex} from './ducks/channel'

const mapStateToProps = (state) => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = (dispatch) => ({
  onRemove: (id) => dispatch(deleteMessageAtIndex(id))
})

export class ChannelHistory extends Component {
  static get defaultProps(){
    return {
      messages: []
    }
  }
  render(){
    const {messages} = this.props
    return <ul className="channel-history">
      { messages.map((li, key) => <ChannelMessage key={key}
                                                  message={li}
                                                  onRemove={e => this.props.onRemove(key)}
      />) }
    </ul>;
  }
}

export const ChannelMessage = ({message, onRemove}) => (
  <li>{message} <span onClick={onRemove}>X</span></li>
)

export default connect(mapStateToProps, mapDispatchToProps)(ChannelHistory)