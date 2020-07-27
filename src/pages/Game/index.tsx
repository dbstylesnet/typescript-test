import React, { useState, useContext } from 'react';
import GamePage from './styles';
import { useQuery } from '@apollo/client'
import { GET_STARSHIPS_AND_PEOPLE } from '../../config'
import Card from '../../componenets/Card'
import Header from '../../componenets/Header'
import Button from '../../componenets/Button'
import { HistoryContext } from '../../HistoryContext'

interface Starship {
    id: string,
    name: string,
    hyperdriveRating: number,
}

interface Persons {
    id: string,
    name: string,
    height: number,
}

interface GameState {
    scores: string[],
    scoreI: number,
    scoreII: number,
    isPlayerITurn: boolean,
    isTurnStarted: boolean,
    starships: Starship[],
    persons: Persons[],
}

const Game = () => {
    const { loading, error, data } = useQuery(GET_STARSHIPS_AND_PEOPLE)
    const { setHistoryScores } = useContext(HistoryContext)

    const [gameState, setGameState] = useState<GameState>(
        {
            scores: [],
            scoreI: 0,
            scoreII: 0,
            isPlayerITurn: true,
            isTurnStarted: false,
            starships: [],
            persons: [],
        }
    )

    const onTurnStart = () => {
        const assignedStarships = data.allStarships
            .slice()
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)
        const assignedPersons = data.allPersons
            .slice()
            .sort(() => 0.5 - Math.random())
            .slice(0, 2)

        setGameState({
            ...gameState,
            isTurnStarted: true,
            starships: assignedStarships,
            persons: assignedPersons,
        })
    }

    const onStartOver = () => {
        setGameState({
            scores: [],
            scoreI: 0,
            scoreII: 0,
            isPlayerITurn: true,
            isTurnStarted: false,
            starships: [],
            persons: [],
        })
    }

    const onStarshipClick = () => {
        const attributeValueI = gameState.starships ? gameState.starships[0].hyperdriveRating : 0
        const attributeValueII = gameState.starships ? gameState.starships[1].hyperdriveRating : 0
        const winner = attributeValueI > attributeValueII ? "I" : (attributeValueI < attributeValueII ? "II" : "D")
        const scores = gameState.scores ? gameState.scores.slice() : []
        const scoreI = gameState.scoreI ? gameState.scoreI : 0
        const scoreII = gameState.scoreII ? gameState.scoreII : 0
        scores.push(winner)

        setGameState({
            ...gameState,
            scores,
            scoreI: winner === 'I' ? scoreI + 1 : scoreI,
            scoreII: winner === 'II' ? scoreII + 1 : scoreII,
            isPlayerITurn: winner === "I" || (winner === "D" && gameState.isPlayerITurn),
            isTurnStarted: false,
        })
        setHistoryScores(gameState.scores)
    }

    const onPersonClick = () => {
        const attributeValueI = gameState.persons ? gameState.persons[0].height : 0
        const attributeValueII = gameState.persons ? gameState.persons[1].height : 0
        const winner = attributeValueI > attributeValueII ? "I" : (attributeValueI < attributeValueII ? "II" : "D")
        const scores = gameState.scores ? gameState.scores.slice() : []
        const scoreI = gameState.scoreI ? gameState.scoreI : 0
        const scoreII = gameState.scoreII ? gameState.scoreII : 0
        scores.push(winner)

        setGameState({
            ...gameState,
            scores,
            scoreI: winner === "I" ? scoreI + 1 : scoreI,
            scoreII: winner === "II" ? scoreII + 1 : scoreII,
            isPlayerITurn: winner === "I" || (winner === "D" && gameState.isPlayerITurn),
            isTurnStarted: false,
        })
        setHistoryScores(gameState.scores)
    }

    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    return (
        <GamePage>
            <Header
                scores={gameState.scores}
                scoreI={gameState.scoreI}
                scoreII={gameState.scoreII}
            />

            {gameState.starships.length ? <div>Starships</div> : ''}
            <div className="cards-container">
                {gameState.starships && gameState.starships
                    .map((starship: Starship, index: number) => (
                        <div key={starship.id} className="starships">
                            <Card
                                onCardClick={onStarshipClick}
                                playerITurn={gameState.isPlayerITurn}
                                isTurnStarted={gameState.isTurnStarted}
                                cardType="Starship"
                                attribute="Drive"
                                name={starship.name}
                                attrValue={starship.hyperdriveRating}
                                player={index}
                            />
                        </div>
                    )
                    )}
            </div>

            {gameState.persons.length ? <div>Persons</div> : ''}
            <div className="cards-container">
                {gameState.persons && gameState.persons
                    .map((persons: Persons, index: number) => (
                        <div key={persons.id} className="persons">
                            <Card
                                onCardClick={onPersonClick}
                                playerITurn={gameState.isPlayerITurn}
                                isTurnStarted={gameState.isTurnStarted}
                                cardType="Persons"
                                attribute="Height"
                                name={persons.name}
                                attrValue={persons.height}
                                player={index}
                            />
                        </div>
                    )
                    )}
            </div>

            {gameState.starships.length ?
                <div><h2>
                    {`Player ${gameState.isPlayerITurn ? 'I' : 'II'} chooses card`}
                </h2></div> :
                ''
            }

            <Button callback={(onTurnStart)} text="Next turn" />
            <Button callback={(onStartOver)} text="Start New Game" />
            <span>made by dbstyles</span>
        </GamePage>
    )
}

export default Game
