import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../../../componenets/Button'

let gameState = {}

const callback = () => {
    gameState = {
        ...gameState,
    }
}

const btnProps = {
    callback: callback,
    text: "Next turn",
}

it('renders Button component without error', () => {
    const component = renderer.create(<Button {...btnProps} />)
    const instance = component.root
    const button = instance.findByType("button")
    expect(button.props.children).toBe("Next turn")
    expect(button.props.onClick).toBe(callback)
})
