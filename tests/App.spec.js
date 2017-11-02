import React from 'react'
import './enzyme-config'
import App from '../src/App'
import {shallow} from 'enzyme'
import ChannelHistory from "../src/ChannelHistory";

describe('App', () => {
  let subject = shallow(<App/>)
  beforeEach(()=>{
    subject = shallow(<App/>)
  })

  it('Deve exibir um h1', () => {
    expect(subject).toBePresent()
  })

  it('Deve conter um <ChannelHistory/>', () => {
    expect(subject.find('ChannelHistory')).toBePresent()
  })

  it('Deve conter um <ComposeMessage/>', () => {
    expect(subject.find('ComposeMessage')).toBePresent()
  })

  it('Deve iniciar com state.messages vazio', () => {
    expect(subject.instance().state.messages).toEqual([])
  })

  it('Deve adicionar uma mensagem quando onMessage() for chamada', () => {
    const instance = subject.instance()
    instance.onMessage('new message1')
    instance.onMessage('new message2')

    expect(instance.state.messages).toEqual(['new message1', 'new message2'])
  })
})