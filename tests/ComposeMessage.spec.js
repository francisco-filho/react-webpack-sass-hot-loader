import React from 'react'
import {shallow, mount} from 'enzyme'

import {ComposeMessage} from '../src/ComposeMessage'

describe('<ComposeMessage/>', () => {
  let subject = shallow(<ComposeMessage/>)

  it('Deve iniciar com estado vazio', () =>{
    const state = subject.instance().state['message']
    expect(state).toEqual('')
  })

  it('Deve contar um <input/>', () => {
    expect(subject.find('input')).toBePresent()
  })

  it('Deve conter um <button/>', () => {
    expect(subject.find('button')).toBePresent()
  })

  it('Deve atualizar valor da mensagem ao digitar no <input/>', () => {
    const subject = shallow(<ComposeMessage/>)
    createMessage(subject, 'new message')

    const state = subject.instance().state
    expect(state.message).toEqual('new message')
  })

  it('Deve manter da mensagem se <input/> for vazio', () => {
    const subject = shallow(<ComposeMessage/>)
    createMessage(subject, ' ')

    const state = subject.instance().state
    expect(state.message).toEqual('')
  })

  it('Deve adicionar uma mensagem ao digitar algo e clicar no <button/>', () => {
    const fn = jest.fn()
    const subject = shallow(<ComposeMessage onMessage={fn}/>)
    const button = subject.find('button')
    createMessage(subject, 'old message')

    button.simulate('click', event())

    expect(fn).toHaveBeenCalledWith('old message')
  })

  it('Deve chamar onMessage() ao clicar no botão', () => {
    const fn = jest.fn()
    const subject = shallow(<ComposeMessage onMessage={fn}/>)
    const button = subject.find('button', event())

    button.simulate('click', event())
    expect(fn).toHaveBeenCalled()
  })

  it('Deve limpar o estado de .mensagem executar onMessage()', () => {
    const fn = jest.fn()
    const subject = shallow(<ComposeMessage onMessage={fn}/>)
    const button = subject.find('button')

    createMessage(subject, "eu serei limpo")
    button.simulate('click', event())

    expect(subject.instance().state.message).toBe('')
  })
})

function createMessage(subject, value){
  const input = subject.find('input').first()
  const event = {target: { value: value }}
  input.simulate('change', event)
}

function event(){
  return {
    preventDefault: () =>{},
    stopPropagation: () =>{}
  }
}
