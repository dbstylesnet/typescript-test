import React from 'react'
import ButtonStyles from './styles'

type BtnProps = {
    callback: any,
    text: string,
}

const Button = ({ callback, text }: BtnProps) => {
    return <ButtonStyles onClick={callback}>
        {text}
    </ButtonStyles>
}

export default Button
