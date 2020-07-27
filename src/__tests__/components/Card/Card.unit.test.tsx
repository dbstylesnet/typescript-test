import React from 'react'
import { shallow } from 'enzyme'
import Card from '../../../componenets/Card'

let gameState = {
    scores: [],
    scoreI: 0,
    scoreII: 0,
    isPlayerITurn: true,
    isTurnStarted: false,
    starships: [
        {
            id: "cj0nwtqoyq4tp0114jjljap6j",
            name: "Sentinel-class landing craft",
            hyperdriveRating: 1,
        },
        {
            id: "cj0nwtqphq4tr0114zo7suw8h",
            name: "Death Star",
            hyperdriveRating: 4,
        },
    ],
    persons: [],
}

// cardProps: isTurnStarted: true, playerITurn: true,
const cardProps = {
    isTurnStarted: true,
    playerITurn: true,
    cardType: "Starship",
    attribute: "hyperdriveRating",
    attrValue: 1,
    name: "Death Star",
    player: 1,
    onCardClick: () => {
        gameState = {
            ...gameState,
        }
    }
}


it('shallow renders without crashing', () => {
    const wrapper = shallow(<Card {...cardProps} />)
    expect(wrapper).toMatchSnapshot() 
    expect(wrapper.prop('className')).toEqual('card')
    expect(wrapper.containsMatchingElement(<span>Name: Death Star</span>)).toBeTruthy()
})

it('shallow renders with turnStarted and playerITurn', () => {
    const wrapper = shallow(<Card {...cardProps} />)
    expect(wrapper.prop('onClick')).toBeTruthy()
    expect(wrapper.containsMatchingElement(<span>hyperdriveRating:?</span>)).toBeTruthy() 
})


// cardProps: isTurnStarted: false, playerITurn: true,
const cardProps2 = {
    isTurnStarted: false,
    playerITurn: true,
    cardType: "Starship",
    attribute: "hyperdriveRating",
    attrValue: 1,
    name: "Death Star",
    player: 1,
    onCardClick: () => {
        gameState = {
            ...gameState,
        }
    }
}

it('shallow renders without turnStarted and with playerITurn', () => {
    const wrapper = shallow(<Card {...cardProps2} />)
    expect(wrapper.prop('onClick')).toBeFalsy()
    expect(wrapper.containsMatchingElement(<span>hyperdriveRating:1</span>)).toBeTruthy() 
})

// cardProps: isTurnStarted: true, playerITurn: false,
const cardProps3 = {
    isTurnStarted: true,
    playerITurn: false,
    cardType: "Starship",
    attribute: "hyperdriveRating",
    attrValue: 1,
    name: "Death Star",
    player: 1,
    onCardClick: () => {
        gameState = {
            ...gameState,
        }
    }
}

it('shallow renders without turnStarted and with playerITurn', () => {
    const wrapper = shallow(<Card {...cardProps3} />)
    expect(wrapper.prop('onClick')).toBeTruthy()
    expect(wrapper.containsMatchingElement(<span>hyperdriveRating:1</span>)).toBeTruthy() 
})

// cardProps: isTurnStarted: false, playerITurn: false,
const cardProps4 = {
    isTurnStarted: false,
    playerITurn: false,
    cardType: "Starship",
    attribute: "hyperdriveRating",
    attrValue: 1,
    name: "Death Star",
    player: 1,
    onCardClick: () => {
        gameState = {
            ...gameState,
        }
    }
}

it('shallow renders without turnStarted and with playerITurn', () => {
    const wrapper = shallow(<Card {...cardProps4} />)
    expect(wrapper.prop('onClick')).toBeFalsy()
    expect(wrapper.containsMatchingElement(<span>hyperdriveRating:1</span>)).toBeTruthy() 
})
