import React from 'react'
import CardStyles from './styles'   

interface PlayerProps{
    isTurnStarted: boolean,
    playerITurn: boolean, 
    cardType: string,
    attribute: string,
    attrValue: number,
    name: string,
    player: number,
    onCardClick?: (x: any) => void,
}

const Card = (props: PlayerProps) => {
    return <CardStyles>
        <span onClick={props.isTurnStarted ? props.onCardClick : undefined}>
            <div></div>
            Name: {props.name}
            <div></div>
            {props.attribute}: 
            {!props.isTurnStarted || 
                (props.player === 0 && props.playerITurn) ||
                (props.player === 1 && !props.playerITurn) ?
            props.attrValue : '?'}
        </span>
    </CardStyles>
}

export default Card
