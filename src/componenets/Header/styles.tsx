import styled from 'styled-components'

const HeaderStyles = styled.div`
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

    .history-link {
        display: block;
        font-size: 15px;
        text-transform: uppercase;
        position: absolute;
        top: 10%;
        right: 20%;
    }

    .score {
        border: 1px solid #61dafb;
        width: 200px;
        margin: 0 auto;
        color: white;
        padding: 15px 0;
        font-size: 20px;
    }

    .score ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
        li {
            display: inline-block;
            margin: 5px 20px;
        }
    }
    
    .players ul {
        display: flex;
        flex: 1;
        font-size: 30px;
        list-style-type: none;
        padding: 0;
        li {
            width: 50%;
        }
    }
`

export default HeaderStyles
