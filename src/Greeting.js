import React from 'react'

export function AddGreetingButton({text = "Add", onAddGreeting}){
  return <button onClick={ e=> onAddGreeting(e) }>{text}</button>
}

export default class Greeting extends React.Component {
  constructor(){
    super()
    this.state = {greetings: []}
    this.addGreeting.bind(this)
  }

  addGreeting(text){
    this.setState({greetings: [...this.state.greetings, text]})
  }

  render(){
    const {greetings} = this.state
    return (
      <div className="greeting">
        <AddGreetingButton onAddGreeting={ this.addGreeting }/>
        <ul>
          {
            greetings.map((g, i) => (
              <li key={i}>{g}</li>
            ))
          }
        </ul>
      </div>
    )
  }
}
