import React, { useContext } from 'react'
import HistoryPage from './styles'
import { HistoryContext } from '../../HistoryContext'

interface Scores {
    scores?: string,
}

const History = () => {
    const { historyScores } = useContext(HistoryContext)

    return <HistoryPage>
        <header className="header">
            History
        </header>
        <ul>
            {historyScores.length > 0 ?
                historyScores.map((scores: Scores, index: number) => {
                    return <div key={index}>{scores}</div>
                }) :
                ''
            }
        </ul>
    </HistoryPage>
}

export default History
