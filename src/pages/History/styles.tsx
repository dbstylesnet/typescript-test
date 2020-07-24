import styled from 'styled-components'

const HistoryPage = styled.div`
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
    
    .header {
        background-color: #282c34;
        min-height: 10vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    }

    .cards-container {
        display: flex;
        width: 100%;
        div {
            flex: 1;
        }
    }
`

export default HistoryPage
