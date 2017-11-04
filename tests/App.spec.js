import React from 'react'
import './enzyme-config'
import App from '../src/App'
import {shallow} from 'enzyme'

describe('App', () => {
  let subject = shallow(<App/>)
  beforeEach(()=>{
    subject = shallow(<App/>)
  })

  it('Deve exibir um h1', () => {
    expect(subject).toBePresent()
  })

  it.skip('Deve conter um <ChannelHistory/>', () => {
    expect(subject.find('.channel-history')).toBePresent()
  })

  it.skip('Deve conter um <ComposeMessage/>', () => {
    expect(subject.find('ComposeMessage')).toBePresent()
  })

  it('Deve iniciar com state.messages vazio', () => {
    expect(subject.instance().state.messages).toEqual([])
  })
})