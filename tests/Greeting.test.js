import React from 'react'
import {shallow, mount} from 'enzyme'
import './enzyme-config'
import Greeting, {AddGreetingButton} from "../src/Greeting";

//08007254114 10621

describe('<Greenting/>', () => {
  it('Deve conter o botão "add"', () => {
    const subject = shallow(<Greeting/>)
    expect(subject.find('div.greeting')).toBePresent()
  })

  it('Deve estar vazio', () => {
    const subject = shallow(<Greeting/>)
    expect(subject).toHaveState('greetings', [])
  })

  it('Deve conter 2 greetings', () => {
    const subject = shallow(<Greeting/>)
    const instance = subject.instance()
    instance.addGreeting('hello')
    instance.addGreeting('olá')
    expect(subject).toHaveState('greetings', ['hello', 'olá'])
  })

  describe('<AddGreetingButton/>', () => {
    it('Deve conter texto "add"', ()=> {
      const subject = shallow(<AddGreetingButton text="add"/>)
      expect(subject).toHaveText("add")
    })

    it('Deve ter o texto padrão "Add" se não informado', () => {
      const subject = shallow(<AddGreetingButton/>)
      expect(subject).toHaveText('Add')
    })

    it('Deve chamar função ao ser clicado', () => {
      const fn = jest.fn()
      const subject = shallow(<AddGreetingButton onAddGreeting={fn}/>)
      subject.find('button').simulate('click')

      expect(fn).toHaveBeenCalled()
    })
  })
})