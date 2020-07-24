import React from 'react'
import CardStyles from './styles'

interface PlayerProps {
    isTurnStarted: boolean,
    playerITurn: boolean,
    cardType?: string,
    attribute: string,
    attrValue: number,
    name: string,
    player: number,
    onCardClick?: (x: any) => void,
}
const Card = ({ isTurnStarted, playerITurn, attribute, attrValue, name, player, onCardClick }: PlayerProps) => {
    return <CardStyles onClick={isTurnStarted ? onCardClick : undefined}>
        <div></div>
            Name: {name}
        <div></div>
        {attribute}:
            {!isTurnStarted ||
            (player === 0 && playerITurn) ||
            (player === 1 && !playerITurn) ?
            attrValue :
            '?'
        }
    </CardStyles>
}

export default Card
