import React from 'react'
import CardStyles from './styles'

interface CardProps {
    isTurnStarted: boolean,
    playerITurn: boolean,
    cardType?: string,
    attribute: string,
    attrValue: number,
    name: string,
    player: number,
    onCardClick?: (x: any) => void,
}

const Card = ({ isTurnStarted, playerITurn, attribute, attrValue, name, player, onCardClick }: CardProps) => {
    return <CardStyles onClick={isTurnStarted ? onCardClick : undefined} className="card">
        <div></div>
        <span>Name: {name}</span>
        <div></div>
        <span>{attribute}:
        {
            !isTurnStarted ||
            (player === 0 && playerITurn) ||
            (player === 1 && !playerITurn) ?
                attrValue :
                '?'
        }
        </span>
    </CardStyles>
}

export default Card
