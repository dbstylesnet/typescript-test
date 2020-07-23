import React from 'react'

interface Props {}

function Header(props: Props) {
    const {} = props

    return <>
        <header className="header">
        Top Trumps
    </header>
    <div className="score">
        <div className="title">Score:</div>
        <ul>
            <li>I: 0</li>
            <li>II: 0</li>
        </ul>
    </div>
    <div className="players">
        <ul>
            <li>Player I</li>
            <li>Player II</li>
        </ul>
    </div>
    </>
}

export default Header
