import React from 'react'
import ButtonStyles from './styles'

type BtnProps = {
    callback?: any,
    text: string,
}

const Button:React.FC<BtnProps> = (({ callback, text }) => (
        <ButtonStyles onClick={callback}>
            {text}
        </ButtonStyles>
    )
)   

export default Button
