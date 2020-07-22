import React, { useState, useEffect } from 'react';
import GamePage from './styles';
import { useQuery } from '@apollo/client'
import { GRAPHQL_API, GET_ALL_STARSHIPS } from '../../consts'
import Card from '../../componenets/Card'

interface StarShipProps {
    id: string,
    hyperdriveRating: number,
}

const GameProvider = () => {
    const [scores, setScores] = useState<[]>([])
    const [playing, setPlaying] = useState<boolean>(true)
    const [scoreI, setScoreI] = useState<number>(0)
    const [scoreII, setScoreII] = useState<number>(0)
    const [playerITurn, setPlayerITurn] = useState<boolean>(true)
    const [currentICards, setCurrentICards] = useState<Array<number>>([])
    const [currentIICards, setCurrentIICards] = useState<[]>([])
    const [chosenCard, setChosenCard] = useState<[]>([]) 

    const updFun = () => {
        setCurrentICards([2, 10])
    }

    useEffect(() => {
        const fetchStarships = () => {
            // const queryResult - await axios.post
        }
    })

    const { loading, error, data } = useQuery(GET_ALL_STARSHIPS)

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>


    return (
        <GamePage>
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

            <div className="cards">
                <div className="left">
                    <Card cardType="Person" attribute="Height" attrValue={92} player={"I"} funcThatUpdates={updFun} />
                    <Card cardType="Starship" attribute="Drive" attrValue={1} player={"I"} funcThatUpdates={updFun} />
                </div>
                <div className="right">
                    <Card cardType="Person" attribute="Height" attrValue={0} player={"II"} funcThatUpdates={updFun} />
                    <Card cardType="Starship" attribute="Drive" attrValue={0} player={"II"} funcThatUpdates={updFun} />
                </div>
            </div>

            {data.allStarships.map( (starship: StarShipProps) => (
                <div key="id">{starship.id}: {starship.hyperdriveRating}</div>
            ))}

            {playing  
                ? `Player ${playerITurn ? 'I' : 'II'} chooses card` 
                : `Player I wins`
            }
        </GamePage>
    );
}

export default GameProvider
