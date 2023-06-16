import React from 'react'

import { Helmet } from 'react-helmet'

import './wallet-checker.css'

const WalletChecker = (props) => {
  return (
    <div className="wallet-checker-container">
      <Helmet>
        <title>Wallet-Checker - Lazy Sats</title>
        <meta property="og:title" content="Wallet-Checker - Lazy Sats" />
      </Helmet>
      <div className="wallet-checker-hero">
        <div className="wallet-checker-container01">
          <div className="wallet-checker-container02">
            <div className="wallet-checker-container03"></div>
            <div className="wallet-checker-container04">
              <button type="button" className="wallet-checker-button button">
                <span className="wallet-checker-text">
                  <span className="wallet-checker-text01">Wallet Checker</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="wallet-checker-button1 button">
                <span className="wallet-checker-text03">
                  <span className="wallet-checker-text04">HD Download</span>
                  <br></br>
                </span>
              </button>
              <button type="button" className="wallet-checker-button2 button">
                <span>
                  <span className="wallet-checker-text07">Connect</span>
                  <br></br>
                </span>
              </button>
            </div>
          </div>
          <div className="wallet-checker-container05">
            <div className="wallet-checker-container06">
              <img
                alt="image"
                src="/Lazy Sats/jaredfromsubway-1000w.png"
                className="wallet-checker-image"
              />
            </div>
            <div className="wallet-checker-container07">
              <div className="wallet-checker-container08">
                <h1 className="wallet-checker-text09">Wallet Checker</h1>
              </div>
              <div className="wallet-checker-container09">
                <input
                  type="text"
                  placeholder="Enter your Ordinals address"
                  className="wallet-checker-textinput input"
                />
                <button type="submit" className="wallet-checker-button3 button">
                  <span className="wallet-checker-text10">
                    <span>Check</span>
                    <br></br>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WalletChecker
