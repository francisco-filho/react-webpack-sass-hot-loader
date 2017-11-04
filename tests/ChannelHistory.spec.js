import React from 'react'
import {shallow, mount} from 'enzyme'
import {createStore} from 'redux'

import reducer from '../src/ducks/channel'
import {ChannelHistory, ChannelMessage} from '../src/ChannelHistory'

const store = () => (createStore(reducer))

describe('<ChannelHistory/>', () => {
  it('Deve iniciar vazia', () => {
    const subject = shallow(<ChannelHistory store={store()}/>)
    const messages = subject.instance().props['messages']

    expect(messages).toEqual([])
  })

  it('Deve conter uma lista com 1 elemento', ()=> {
    const messages = ['primeiro']
    const subject = shallow(<ChannelHistory store={store()} messages={messages}/>)
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
    const subject = shallow(<ChannelHistory store={store()}/>)

    expect(subject.find('ul')).toBePresent();
  })

  it('Deve exibir um item dentro do <ul/>', ()=> {
    const messages = ['first']
    const subject = shallow(<ChannelHistory messages={messages}/>)

    expect(subject.find('ul').find('ChannelMessage')).toHaveLength(1);
  })

  // por que não deveria escrever este teste? por que ele não falhará
  it('Deve conter 3 elementos dentro do <ul/>', () => {
    const messages = ['first', 'median', 'last']
    const subject = shallow(<ChannelHistory messages={messages}/>)

    expect(subject.find('ul').find('ChannelMessage')).toHaveLength(3)
  })

  it('Deve passar a função onRemove() para o <ChannelMessage/>', ()=> {
    const fn = jest.fn()
    const subject = mount(<ChannelHistory messages={['hello']} onRemove={fn}/>)
    const span = subject.find('ChannelMessage').find('span')
    span.simulate('click')

    expect(fn).toHaveBeenCalledWith(0)
  })

  describe('<ChannelMessage/>', () => {
    it('Deve chamar a função onRemove()', () => {
      const fn = jest.fn()
      const subject = shallow(<ChannelMessage message={'hello'} onRemove={fn}/>)
      subject.find('span').simulate('click')

      expect(fn).toHaveBeenCalled()
    })
  })
})
