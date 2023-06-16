import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import WalletChecker from './views/wallet-checker'
import Home from './views/home'
import Submit from './views/submit'
import Lazy from './views/lazy'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={WalletChecker} exact path="/wallet-checker" />
        <Route component={Home} exact path="/" />
        <Route component={Submit} exact path="/submit" />
        <Route component={Lazy} exact path="/home_old" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
