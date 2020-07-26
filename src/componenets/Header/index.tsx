import React from 'react'
import HeaderStyles from './styles'
import { BrowserRouter, Link } from 'react-router-dom'

type HeaderProps = {
    scores?: string[],
    scoreI: number,
    scoreII: number,
}

const Header = ({ scores, scoreI, scoreII }: HeaderProps) => {
    return <HeaderStyles>
        <header className="header">
            Top Trumps
                <div className="history-link">
                <BrowserRouter>
                    <Link to="/history" >
                        <div>Results</div>
                    </Link>
                </BrowserRouter>
            </div>
        </header>
        <div className="score">
            <div className="title">Score:</div>
            <ul>
                <li>I: {scoreI}</li>
                <li>II: {scoreII}</li>
            </ul>
        </div>
        <div className="players">
            <ul>
                <li>Player I</li>
                <li>Player II</li>
            </ul>
        </div>
        {console.log(scores)}
    </HeaderStyles>
}

export default Header
