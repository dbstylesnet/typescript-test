import React from 'react'
import HistoryPage from './styles'

interface HistoryProps {
    scores?: string[],
}

const History = ({ scores }: HistoryProps) => {
    return <HistoryPage>
        <header className="header">
            History
        </header>
        <ul>
        {scores ?
            scores.map(score => (
                    <li>{score}</li>
                ))
            : 'none'
            }
        </ul>
    </HistoryPage>
}

export default History
