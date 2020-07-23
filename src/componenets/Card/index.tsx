import React from 'react'
import CardStyles from './styles'

interface PlayerProps{
    cardType: string,
    attribute: string,
    attrValue: number,
    name: string,
    id?: string,
    player: number,
    funcThatUpdates?: (x: any) => any,
}

const Card = (props: PlayerProps) => {
    return <CardStyles className={props.player === 1 ? 'left' : 'right'}>
        <span onClick={props.funcThatUpdates}>
        Player {props.player === 1 ? 'I' : 'II'}
        <div></div>
        Name: {props.name}
        <div></div>
        {props.attribute}: {props.attrValue ? props.attrValue : '?'}
        </span>
    </CardStyles>
}

export default Card
