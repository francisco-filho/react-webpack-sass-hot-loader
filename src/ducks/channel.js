const POST_MESSAGE = "slackr/channel/POST_MESSAGE"
const DELETE_MESSAGE = "slackr/channel/DELETE_MESSAGE"

const initialState = {
  messages: []
}

export default function reducer(state = initialState, action = {}){
  switch (action.type){
    case POST_MESSAGE:
      return {
        ...state,
        messages: state.messages.concat([action.message])
      }
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((msg, i) => i !== action.index)
      }
    default:
      return state
  }
}

export function postMessage(message){
  return {
    type: POST_MESSAGE,
    message
  }
}

export function deleteMessageAtIndex(index){
  return {
    type: DELETE_MESSAGE,
    index
  }
}