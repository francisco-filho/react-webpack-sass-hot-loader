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
    this.setState((prev) => {
      return {
        ...prev,
        messages: prev.messages.concat([e])
      }
    })
  }

  messages(){
    const { messages } = this.state
    return <div>
      <h1>Messages</h1>
      <ChannelHistory messages={messages}/>
      <ComposeMessage onMessage={ this.onMessage }/>
    </div>
  }

  render(){
    return <div>
      <h1>Componentes estilizados com CSS</h1>
      <form>
        <div className="form-row">
          <label>Endereço da página</label>
          <input placeholder="https:// ou http://"/>
        </div>
        <div className="form-row">
          <label>Endereço da página</label>
          <input placeholder="https:// ou http://"/>
        </div>
        <div className="form-row">
          <label>Status</label>
          <select>
            <option>Desativado</option>
            <option>Ativo</option>
            <option>Não identificado</option>
          </select>
        </div>
        <div className="form-row">
          <label>Endereço da página</label>
          <textarea rows={5}/>
        </div>
        <div className="form-row">
          <label>Opções de tamanho da fonte</label>
          <div className="checkbox">
            <input type="checkbox"/><label>Pequeno</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"/><label>Médio</label>
          </div>
          <div className="checkbox">
            <input type="checkbox"/><label>Grande</label>
          </div>
        </div>
        <h2>Componentes estilizados com CSS</h2>
        <div className="form-row">
          <label>Endereço da página</label>
          <input placeholder="https:// ou http://"/>
        </div>
        <div className="form-row">
          <label>Endereço da página</label>
          <input placeholder="https:// ou http://"/>
        </div>
        <h2>Componentes estilizados com CSS</h2>
        <div className="form-row">
          <label>Endereço da página</label>
          <input placeholder="https:// ou http://"/>
        </div>
        <div className="form-row">
          <label>Endereço da página</label>
          <input placeholder="https:// ou http://"/>
        </div>
        <div className="form-row">
          <a className="button primary">Salvar alterações</a>
          <a className="button">Cancelar</a>
        </div>
      </form>
    </div>
  }
}