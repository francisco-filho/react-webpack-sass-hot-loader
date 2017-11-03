import React from 'react'
import {shallow, mount} from 'enzyme'

import ChannelHistory from '../src/ChannelHistory'

describe('<ChannelHistory/>', () => {
  it('Deve iniciar vazia', () => {
    const subject = shallow(<ChannelHistory/>)
    const messages = subject.instance().props['messages']

    expect(messages).toEqual([])
  })

  it('Deve conter uma lista com 1 elemento', ()=> {
    const messages = ['primeiro']
    const subject = shallow(<ChannelHistory messages={messages}/>)
    const props = subject.instance().props['messages']

    expect(props).toEqual(messages)
  })

  it('Deve conter lista com dois elementos', () => {
    const messages = ['um', 'dois']
    const subject = shallow(<ChannelHistory messages={messages}/>)
    const props = subject.instance().props['messages']

    expect(props).toEqual(messages)
  })

  it('Deve exibir <ul/> vazia', () => {
    const subject = shallow(<ChannelHistory/>)

    expect(subject.find('ul')).toBePresent();
  })

  it('Deve exibir um item dentro do <ul/>', ()=> {
    const messages = ['first']
    const subject = shallow(<ChannelHistory messages={messages}/>)

    expect(subject.find('ul').find('li')).toHaveLength(1);
  })

  // por que não deveria escrever este teste? por que ele não falhará
  it('Deve conter 3 elementos dentro do <ul/>', () => {
    const messages = ['first', 'median', 'last']
    const subject = shallow(<ChannelHistory messages={messages}/>)

    expect(subject.find('ul').find('li')).toHaveLength(3)
  })
})
