import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './submit.css'

const Submit = (props) => {
  return (
    <div className="submit-container">
      <Helmet>
        <title>Lazy Sats - Artist HUB</title>
        <meta property="og:title" content="Lazy Sats - Artist HUB" />
      </Helmet>
      <div className="submit-hero">
        <div className="submit-container1">
          <div className="submit-submit-desktop">
            <img
              alt="image"
              src="/Lazy Sats/collage%202-1400w.png"
              loading="eager"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="submit-header-image"
            />
            <div className="submit-artist-hub-info">
              <h1 className="submit-text">Submit your trait</h1>
              <span className="submit-text01">
                <span>
                  Welcome to the Lazy Sats Artist HUB, a haven for unleashing
                  your boundless imagination and embracing your inner artist.
                  Here, you have the freedom to create distinctive traits for
                  the Lazy Sats collection, with each selected trait offering
                  the opportunity to earn royalties for its creator.
                </span>
                <br></br>
                <br></br>
                <span>
                  Craft your own traits in accordance with our guidelines, which
                  you can find below. Once you&apos;ve perfected your
                  masterpiece, simply submit it through the Artist HUB.
                  Remember, there&apos;s no limit to the number of traits you
                  can submit—let your creativity flow without constraint.
                </span>
              </span>
            </div>
            <div className="submit-submit">
              <form
                action='https://formsubmit.co/lazysatsbtc@gmail.com" method="POST'
                enctype="application/x-www-form-urlencoded"
                className="submit-form"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="submit-textinput input"
                />
                <input
                  type="email"
                  name="mail"
                  required
                  placeholder="E-Mail"
                  className="submit-textinput01 input"
                />
                <input
                  type="text"
                  name="discord"
                  required
                  placeholder="Discord-ID"
                  className="submit-textinput02 input"
                />
                <input
                  type="text"
                  name="wallet"
                  required
                  placeholder="Bitcoin Address"
                  className="submit-textinput03 input"
                />
                <input
                  type="file"
                  name="file"
                  accept="image"
                  required
                  placeholder="Upload File"
                  className="submit-textinput04 input"
                />
                <button
                  name="submit-trait"
                  type="submit"
                  className="submit-button button"
                >
                  Submit
                </button>
              </form>
              <span className="submit-text06">
                Submissions are currently closed. Opening soon!
              </span>
              <Link
                to="/"
                name="submit-trait"
                className="submit-navlink button"
              >
                Return home
              </Link>
            </div>
          </div>
          <div className="submit-submit-mobile">
            <img
              alt="image"
              src="/Lazy Sats/collage%202-1400w.png"
              loading="eager"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="submit-header-image1"
            />
            <div className="submit-artist-hub-info1">
              <h1 className="submit-text07">Submit your trait</h1>
              <span className="submit-text08">
                <span>
                  Welcome to the Lazy Sats Artist HUB, a haven for unleashing
                  your boundless imagination and embracing your inner artist.
                  Here, you have the freedom to create distinctive traits for
                  the Lazy Sats collection, with each selected trait offering
                  the opportunity to earn royalties for its creator.
                </span>
                <br></br>
                <br></br>
                <span>
                  Craft your own traits in accordance with our guidelines, which
                  you can find below. Once you&apos;ve perfected your
                  masterpiece, simply submit it through the Artist HUB.
                  Remember, there&apos;s no limit to the number of traits you
                  can submit—let your creativity flow without constraint.
                </span>
              </span>
            </div>
            <div className="submit-submit1">
              <form
                action='https://formsubmit.co/lazysatsbtc@gmail.com" method="POST'
                method="POST"
                enctype="application/x-www-form-urlencoded"
                className="submit-form1"
              >
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Name"
                  className="submit-textinput05 input"
                />
                <input
                  type="email"
                  name="mail"
                  required
                  placeholder="E-Mail"
                  className="submit-textinput06 input"
                />
                <input
                  type="text"
                  name="discord-id"
                  required
                  placeholder="Discord-ID"
                  className="submit-textinput07 input"
                />
                <input
                  type="text"
                  name="bitcoin-address"
                  required
                  maxlength="64"
                  minlength="32"
                  placeholder="Bitcoin Address"
                  className="submit-textinput08 input"
                />
                <input
                  type="file"
                  name="file"
                  accept="image"
                  required
                  placeholder="Upload File"
                  className="submit-textinput09 input"
                />
                <button
                  name="submit-trait"
                  type="submit"
                  className="submit-button1 button"
                >
                  Submit
                </button>
                <span className="submit-text13">
                  Submissions are currently closed. Opening soon!
                </span>
              </form>
            </div>
            <Link to="/" name="submit-trait" className="submit-navlink1 button">
              Return home
            </Link>
          </div>
        </div>
      </div>
      <div className="submit-social-bar">
        <a
          href="https://twitter.com/LazySats"
          target="_blank"
          rel="noreferrer noopener"
          className="submit-link"
        >
          <svg viewBox="0 0 950.8571428571428 1024" className="submit-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Submit
