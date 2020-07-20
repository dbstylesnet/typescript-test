import React from 'react'
import CardStyles from './styles'

interface Props{
    cardType: string,
    attribute: string,
    attrValue: number,
    value: number,
    onClick?: (event: React.MouseEvent<HTMLInputElement>) => void,
}

// export type EventHandlerProps = {
//     onClick: (e: React.MouseEvent) => void
// }



const Card = (props: Props, ) => {
    function setCnt(cnt: number) {
        
    } 

    return <CardStyles>
        <input onClick={event => props.onClick(event.target.value)}>{props.cardType}</input>
        {props.attribute}: {props.attrValue}
    </CardStyles>
}

export default Card
