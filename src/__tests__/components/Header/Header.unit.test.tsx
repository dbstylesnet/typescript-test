import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../../componenets/Header'

const headerProps = {
    scores: ["I", "II", "II"],
    scoreI: 1,
    scoreII: 2,
}

it('shallow renders without crashing', () => {
    const wrapper = shallow(<Header {...headerProps} />)
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("header")).toBeTruthy() 
    expect(wrapper.find(".title")).toBeTruthy()
    expect(wrapper.containsMatchingElement(<li>I: 1</li>)).toBeTruthy()
    expect(wrapper.containsMatchingElement(<li>II: 2</li>)).toBeTruthy()
})
 