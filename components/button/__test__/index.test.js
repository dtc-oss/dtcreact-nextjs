import { shallow } from 'enzyme'
import React from 'react'
import Button from '../index'

describe('With Enzyme', () => {
  it('Button click', () => {
    const app = shallow(<Button/>)

    expect(app.find('p').text()).toEqual('Hello World!')
  })
})