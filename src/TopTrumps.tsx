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
        <Router>
            <Switch>
                <HistoryContext.Provider value={{ historyScores, setHistoryScores }}>
                    <Route path="/history" exact component={History} />
                    <Route path="/" exact component={Game} />
                </HistoryContext.Provider>
            </Switch>
        </Router>
    </ApolloProvider>
}

export default TopTrumps
