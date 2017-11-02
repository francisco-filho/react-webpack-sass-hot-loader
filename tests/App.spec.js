import React from 'react'
import './enzyme-config'
import App from '../src/App'
import {shallow, mount} from 'enzyme'

describe('App', () => {
  let subject = null
  beforeEach(()=>{
    subject = shallow(<App/>)
  })

  it('Deve estar definido', () => {
    expect(subject.contains("Hello World")).toBeTruthy()
  })

  it('Deve funcionar com mount()', () => {
    const subject = mount(<App/>)
    expect(subject.contains("Hello World")).toBeTruthy()
  })

  it('Deve conter texto Hello World', () => {
    expect(subject).toHaveText("Hello World")
  })
})