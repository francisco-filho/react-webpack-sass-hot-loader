import React from 'react'
import './enzyme-config'
import App from '../src/App'
import {shallow, mount} from 'enzyme'

describe('App', () => {
  let subject = null
  beforeEach(()=>{
    subject = shallow(<App/>)
  })

  it('Deve exibir um h1', () => {
    expect(subject).toBePresent()
  })
})