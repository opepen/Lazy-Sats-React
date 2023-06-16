import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import WalletChecker from './views/wallet-checker'
import LazySats from './views/lazy-sats'
import Submit from './views/submit'
import Home from './views/home'
import Home1 from './views/home1'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={WalletChecker} exact path="/wallet-checker" />
        <Route component={LazySats} exact path="/lazy-sats" />
        <Route component={Submit} exact path="/submit" />
        <Route component={Home} exact path="/" />
        <Route component={Home1} exact path="/home1" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
