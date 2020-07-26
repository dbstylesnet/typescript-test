import React, { useState } from 'react'
import GlobalStyle from './GlobalStyle';
import Game from './pages/Game'
import History from './pages/History'
import { ApolloProvider } from '@apollo/client'
import { client } from './config'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { HistoryContext } from './HistoryContext'

const TopTrumps = () => {
    const [historyScores, setHistoryScores] = useState()

    return <ApolloProvider client={client}>
        <GlobalStyle />
        <HistoryContext.Provider value={{ historyScores, setHistoryScores }}>
            <Router>
                <Switch>
                    <Route path="/history" component={History} />
                    <Route path="/" exact component={Game} />
                </Switch>
            </Router>
        </HistoryContext.Provider>
    </ApolloProvider>
}

export default TopTrumps
