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
}

interface People {
    id: string,
    index: number,
    name: string,
    height: number,
}

interface GameState {
    scoress?: number[],
    playingg?: boolean,
    playerITurn?: boolean,
}

type GameProps = {}

type BtnProps = {
    callback?: any
}


const Game: React.FC<GameProps> = ({}) => {
    const { loading, error, data } = useQuery(GET_STARSHIPS_AND_PEOPLE)
    const [scores, setScores] = useState<[]>([])
    const [playing, setPlaying] = useState<boolean>(true)
    const [results, setResults] = useState<boolean>(true)
    const [scoreI, setScoreI] = useState<number>(0)
    const [scoreII, setScoreII] = useState<number>(0)
    const [playerITurn, setPlayerITurn] = useState<boolean>(true)
    const [playerIITurn, setPlayerIITurn] = useState<boolean>(false)
    const [currentICards, setCurrentICards] = useState<number[]>([])
    const [currentIICards, setCurrentIICards] = useState<[]>([])
    const [chosenCard, setChosenCard] = useState<[]>([]) 
    // const [gameState, setGameState] = useState<GameProps>(
        //     [
    //         scoress: [],
    //         playingg: false,
    //     ]
    // ) 
    
    const updFun = () => {
        setCurrentICards([2, 10])
        console.log('re-render')
    }
    
    const clickedGame = useCallback(e => {
        setCurrentICards([2, 10])
        console.log('re-render')
    }, [])
    
    useEffect(() => {
        
        // setCurrentIICards(shufld)
    })
    
    
    const Buttonn:React.FC<BtnProps> = React.memo(({ callback }) => (
        <button onClick={callback}>
            Clicked memo game
            {console.log('re-render btn')}
        </button>
    ))


    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>

    let i:number = 1, j:number = 1


    const allStarships = data.allStarships
    .slice()
    .sort(()=> 0.5 - Math.random())
    .slice(0, 2)
    .map((starship: Starship) => ({...starship, index:i++}))

    

    return (
        <GamePage>
            <header className="header">
                Top Trumps
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

            <div>Starships</div>
            <div className="cards-container">
            {allStarships
                .map((starship: Starship) => (
                    <div key={starship.id} className="starships"> 
                        <Card
                            cardType="Starship" 
                            attribute="Drive" 
                            name={starship.name} 
                            attrValue={starship.hyperdriveRating} 
                            player={starship.index} 
                            funcThatUpdates={updFun} 
                        />
                    </div>
                )
            )}
            </div>

            <div></div>
                    
            <div>People</div>
            <div className="cards-container">
            {data.allPersons
                .slice()
                .sort(()=> 0.5 - Math.random())
                .slice(0, 2)
                .map((people: People) => ({...people, index:j++}))
                .map((people: People) => (
                    <div 
                        key={people.id} 
                        className="people"
                    > 
                        <Card
                            cardType="People" 
                            attribute="Height" 
                            name={people.name} 
                            attrValue={people.height} 
                            player={people.index}
                            funcThatUpdates={updFun} 
                        />
                    </div>
                )
            )}
            </div>
            {/* playerITurn && !playerIITurn  */}
            
            <div >{`Player ${playing ? 'I': 'II'} chooses card`}
            Player I wins, choose the card
            </div>

            <button onClick={() => setPlaying(false)}>
                Next turn
            </button>

            <Buttonn callback={(clickedGame)} />

            <button onClick={clickedGame}>
                Clicked game
            </button>


            <div>Score: {scores}</div>
            <div>results: {results}</div>
            <div>scoreI: {scoreI}</div>
            <div>scoreII: {scoreII}</div>
            <div>playerITurn: {playerITurn ? 'Yes' : 'No'}</div>
            <div>playerIITurn: {playerIITurn ? 'Yes' : 'No'}</div>
            <div>currentICards: {currentICards}</div>
            <div>currentIICards: {currentIICards}</div>
            <div>chosenCard: {chosenCard}</div>

        </GamePage>
    );
}

export default Game
