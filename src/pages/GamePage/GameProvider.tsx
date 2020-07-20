import React, { useState, useEffect } from 'react';
import GamePage from './styles';
import Query from '../../componenets/query'
import Card from '../../componenets/Card'


const GameProvider = () => {
    const [scores, setScores] = useState<[]>([])
    const [playing, setPlaying] = useState<boolean>(false)
    const [scoreI, setScoreI] = useState<number>(0)
    const [scoreII, setScoreII] = useState<number>(0)
    const [playerITurn, setPlayerITurn] = useState<boolean>(true)
    const [currentICards, setCurrentICards] = useState<[]>([])
    const [currentIICards, setCurrentIICards] = useState<[]>([])
    const [chosenCard, setChosenCard] = useState<[]>([]) 
    const [count, setCount] = useState<number>()

    return (
        <GamePage>
            <header className="header">
                Top Trumps
            </header>
            <div className='score'>
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

            <div className="cards">
                <div className="left">
                    <Card cardType="Person" attribute="Height" attrValue={92} value={92} onClick={(value) => setCount(value)} />
                    <Card cardType="Starship" attribute="Drive" attrValue={1} />
                </div>
                <div className="right">
                    <Card cardType="Person" attribute="Height" attrValue={54} />
                    <Card cardType="Starship" attribute="Drive" attrValue={2} />
                </div>
            </div>

            Count: {count}

            <button onClick={() => setCount(1)}>-</button>
            <button onClick={() => setCount(2)}>+</button>

            <Query />

            {playing  
                ? `Player ${playerITurn ? 'I' : 'II'} chooses card` 
                : `Player I wins`
            }
        </GamePage>
    );
}

export default GameProvider
