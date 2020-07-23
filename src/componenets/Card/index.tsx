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
    funcThatUpdates?: (x: any) => any,
}

const Card = (props: PlayerProps) => {
    return <CardStyles>
        <span onClick={props.funcThatUpdates}>
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
