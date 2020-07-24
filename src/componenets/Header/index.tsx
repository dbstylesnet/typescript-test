import React from 'react'
import HeaderStyles from './styles'

interface Props {
    scoreI: number,
    scoreII: number,
}

function Header(props: Props) {
    return <HeaderStyles>
        <header className="header">
            Top Trumps
        </header>
        <div className="score">
            <div className="title">Score:</div>
            <ul>
                <li>I: {props.scoreI}</li>
                <li>II: {props.scoreII}</li>
            </ul>
        </div>
        <div className="players">
            <ul>
                <li>Player I</li>
                <li>Player II</li>
            </ul>
        </div>
    </HeaderStyles>
}

export default Header
