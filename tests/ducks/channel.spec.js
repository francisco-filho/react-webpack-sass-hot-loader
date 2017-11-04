import reducer, * as actions from '../../src/ducks/channel'
import {createStore} from 'redux'

describe('Channel Reducer', () => {
  it('Deve iniciar com array de mensagens vazio', () => {
    expect(reducer().messages).toEqual([])
  })

  it('Deve acumular mensagens', () => {
    const firstState = reducer(
      undefined,
      actions.postMessage('hello world')
    )
    const secondState = reducer(
      firstState,
      actions.postMessage('ia')
    )

    expect(firstState.messages).toEqual(['hello world'])
    expect(secondState.messages).toEqual(['hello world', 'ia'])
  })

  it('Deve acumular mensagens "test com Redux Store"', () => {
    const store = createStore(reducer)

    store.dispatch(actions.postMessage('hello world'))
    expect(store.getState()).toHaveProperty('messages', ['hello world'])

    store.dispatch(actions.postMessage('hey'))
    expect(store.getState().messages).toEqual(['hello world', 'hey'])
  })

  it("Deve remover mensagem no index informado", () => {
    const store = createStore(reducer)
    store.dispatch(actions.postMessage('hello world'))
    store.dispatch(actions.postMessage('hey'))
    store.dispatch(actions.deleteMessageAtIndex(0))

    expect(store.getState()).toHaveProperty('messages', ['hey'])
  })
})