import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyle from './GlobalStyle'; 
import * as serviceWorker from './serviceWorker';
import Game from './pages/Game'
import History from './pages/History'
import { ApolloProvider } from  '@apollo/client'
import { CLIENT } from './consts'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={CLIENT}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/history" component={() => <History scores={["I", "II"]} />}/>
          <Route path="/" exact component={Game} />
        </Switch>
      </Router>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
