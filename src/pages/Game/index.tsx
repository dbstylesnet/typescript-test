import React, { useState, useEffect, useCallback } from 'react';
import GamePage from './styles';
import { useQuery } from '@apollo/client'
import { GET_STARSHIPS_AND_PEOPLE } from '../../consts'
import Card from '../../componenets/Card'

interface Starship {
    id: string,
    index: number,
    name: string,
    hyperdriveRating: number,
    winner?: string,
}

interface People {
    id: string,
    index: number,
    name: string,
    height: number,
    winner?: string,
}

interface GameState {
    scores?: number[],
    scoreI?: number,
    scoreII?: number,
    playerITurn?: boolean,
}

type GameProps = {}

type BtnProps = {
    callback?: any
}


const Game: React.FC<GameProps> = ({}) => {
    const { loading, error, data } = useQuery(GET_STARSHIPS_AND_PEOPLE)
    const [gameState, setGameState] = useState<GameState>(
        { 
            scores: [],
            scoreI: 0,
            scoreII: 0,
            playerITurn: true,
        }
    ) 
    
    const startOver = useCallback(e => {
        setGameState({
            scores: [],
            scoreI: 0,
            scoreII: 0,
            playerITurn: true,
        })
    }, [])
    
    const playerIWins = () => {
        setGameState({
            ...gameState,
            scores: [1,2,1,1,2],
            playerITurn: true, 
        })
    }

    const playerIIWins = () => {
        setGameState({
            ...gameState,
            scores: [1,2,1,1,2],
            playerITurn: false, 
        })
    }
    
    
    useEffect(() => {
        console.log(gameState.scores)
    },[])
    
    
    const Buttonn:React.FC<BtnProps> = React.memo(({ callback }) => (
        <button onClick={startOver}>
            Start Again
        </button>
    ))


    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    let i:number = 1, j:number = 1

    const allStarships = data.allStarships
        .slice()
        .sort(()=> 0.5 - Math.random())
        .slice(0, 2)
        .map((starship: Starship) => ({...starship, index:i++, winner: "yes"}))

    const allPeople = data.allPersons
        .slice()
        .sort(()=> 0.5 - Math.random())
        .slice(0, 2)
        .map((people: People) => ({...people, index:j++, winner: "no"}))
        
    return (
        <GamePage>
            <header className="header">
                Top Trumps
            </header>
            <div className="score">
                <div className="title">Score:</div>
                <ul>
                    <li>I: {gameState.scoreI}</li>
                    <li>II: {gameState.scoreII}</li>
                </ul>
            </div>
            <div className="players">
                <ul>
                    <li>Player I</li>
                    <li>Player II</li>
                </ul>
            </div>

            <div>Starships</div>
            <div className="cards-container">
                {console.log(gameState.playerITurn)}
            {allStarships
                .map((starship: Starship) => (
                    <div key={starship.id} className="starships"> 
                        <Card
                            winner={starship.winner}
                            playerIWins={playerIWins}
                            playerIIWins={playerIIWins}
                            playerITurn={gameState.playerITurn}
                            cardType="Starship" 
                            attribute="Drive" 
                            name={starship.name} 
                            attrValue={starship.hyperdriveRating} 
                            player={starship.index} 
                        />
                    </div>
                )
            )}
            </div>

            <div></div>
                    
            <div>People</div>
            <div className="cards-container">
            {allPeople
                .map((people: People) => (
                    <div key={people.id} className="people"> 
                        <Card
                            winner={people.winner}
                            playerIWins={playerIWins}
                            playerIIWins={playerIIWins}
                            playerITurn={gameState.playerITurn}
                            cardType="People" 
                            attribute="Height" 
                            name={people.name} 
                            attrValue={people.height} 
                            player={people.index}
                        />
                    </div>
                )
            )}
            </div>
            
            <div><h2>{`Player ${gameState.playerITurn ? 'I': 'II'} chooses card`}</h2></div>

            <Buttonn callback={(startOver)} />

            {/* <button onClick={clickedGame}>
                Clicked game
            </button> */}
            <div></div>
        </GamePage>
    );
}

export default Game
