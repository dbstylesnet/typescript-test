import React from 'react'
import CardStyles from './styles'

interface Props{
    cardType: string,
    attribute: string,
    attrValue: number,
    player: string,
    funcThatUpdates?: (x: any) => any,
}

const Card = (props: Props) => {
    return <CardStyles>
        <span onClick={props.funcThatUpdates}>
        Player {props.player}
        <br></br>
        Card: {props.cardType}
        <br></br>
        {props.attribute}: {props.attrValue ? props.attrValue : '?'}
        </span>
    </CardStyles>
}

export default Card
