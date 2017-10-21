import React from 'react'
import './enzyme-config'
import App from '../src/App'
import {shallow, mount} from 'enzyme'

describe('App', () => {
  it('Deve estar definido', () => {
    const subject = shallow(<App/>)
    expect(subject.contains("Hello World")).toBeTruthy()
  })

  it('Deve funcionar com mount()', () => {
    const subject = mount(<App/>)
    expect(subject.contains("Hello World")).toBeTruthy()
  })

  it('Deve conter texto Hello World', () => {
    const subject = shallow(<App/>)
    expect(subject).toHaveText("Hello World")
  })
})