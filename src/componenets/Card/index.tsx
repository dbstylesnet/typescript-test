import React from 'react'
import CardStyles from './styles'   

interface PlayerProps{
    playerITurn?: boolean, 
    cardType: string,
    attribute: string,
    attrValue: number,
    name: string,
    id?: string,
    player: number,
    winner?: string,
    playerIWins?: (x: any) => any,
    playerIIWins?: (x: any) => any,
    funcThatUpdates?: (x: any) => any,
}

const Card = (props: PlayerProps) => {
    return <CardStyles>
        <span onClick={props.player === 1 ? props.playerIWins : props.playerIIWins}>
            Player {props.player === 1 ? 'I' : 'II'}
            <div></div>
            Name: {props.name}
            <div></div>
            {props.attribute}: 
            {props.playerITurn && props.player === 1 ? 
                props.attrValue : 
                    !props.playerITurn && props.player === 2 ? 
                        props.attrValue :
                        '?'
            }
        </span>
    </CardStyles>
}

export default Card
