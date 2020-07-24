import styled from 'styled-components'

const GamePage = styled.div`
    .cards {
        display:flex;
        flex: 1;
        .left {
            display:flex;
            flex-direction: column;
            width: 50%;
        }
        .right {
            display:flex;
            flex-direction: column;
            width: 50%;
        }
    }

    .cards-container {
        display: flex;
        width: 100%;
        div {
            flex: 1;
        }
    }
`

export default GamePage
