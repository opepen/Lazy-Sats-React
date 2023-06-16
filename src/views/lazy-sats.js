import React from 'react'

import { Helmet } from 'react-helmet'

import './lazy-sats.css'

const LazySats = (props) => {
  return (
    <div className="lazy-sats-container">
      <Helmet>
        <title>Lazy Sats | Welcome to the lazy side of life</title>
        <meta
          property="og:title"
          content="Lazy Sats | Welcome to the lazy side of life"
        />
      </Helmet>
      <div className="lazy-sats-build">
        <div className="lazy-sats-head">
          <header
            data-thq="thq-navbar"
            className="lazy-sats-navbar-interactive"
          >
            <img
              alt="logo"
              src="/Lazy Sats/rescaled_image1-200h.png"
              className="lazy-sats-logo"
            />
            <div
              data-thq="thq-navbar-nav"
              data-role="Nav"
              className="lazy-sats-desktop-menu"
            >
              <nav
                data-thq="thq-navbar-nav-links"
                data-role="Nav"
                className="lazy-sats-nav"
              >
                <div
                  data-thq="thq-dropdown"
                  className="lazy-sats-ordinals list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="lazy-sats-dropdown-toggle"
                  >
                    <span className="lazy-sats-text">Ordinals</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="lazy-sats-dropdown-arrow"
                    >
                      <svg viewBox="0 0 1024 1024" className="lazy-sats-icon">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="lazy-sats-dropdown-list"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="lazy-sats-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="lazy-sats-dropdown-toggle1"
                      >
                        <span className="lazy-sats-text01">Mint</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="lazy-sats-market list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="lazy-sats-dropdown-toggle2"
                  >
                    <span className="lazy-sats-text02">Market</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="lazy-sats-dropdown-arrow1"
                    >
                      <svg viewBox="0 0 1024 1024" className="lazy-sats-icon02">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="lazy-sats-dropdown-list1"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="lazy-sats-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="lazy-sats-dropdown-toggle3"
                      >
                        <span className="lazy-sats-text03">MagicEden</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="lazy-sats-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="lazy-sats-dropdown-toggle4"
                      >
                        <span className="lazy-sats-text04">Gamma</span>
                      </div>
                    </li>
                    <li
                      data-thq="thq-dropdown"
                      className="lazy-sats-dropdown3 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="lazy-sats-dropdown-toggle5"
                      >
                        <span className="lazy-sats-text05">
                          Ordinals Market
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                <div
                  data-thq="thq-dropdown"
                  className="lazy-sats-creators list-item"
                >
                  <div
                    data-thq="thq-dropdown-toggle"
                    className="lazy-sats-dropdown-toggle6"
                  >
                    <span className="lazy-sats-text06">Creators</span>
                    <div
                      data-thq="thq-dropdown-arrow"
                      className="lazy-sats-dropdown-arrow2"
                    >
                      <svg viewBox="0 0 1024 1024" className="lazy-sats-icon04">
                        <path d="M426 726v-428l214 214z"></path>
                      </svg>
                    </div>
                  </div>
                  <ul
                    data-thq="thq-dropdown-list"
                    className="lazy-sats-dropdown-list2"
                  >
                    <a href="#artisthub">
                      <li
                        data-thq="thq-dropdown"
                        className="lazy-sats-dropdown4 list-item"
                      >
                        <div
                          data-thq="thq-dropdown-toggle"
                          className="lazy-sats-dropdown-toggle7"
                        >
                          <span className="lazy-sats-text07">Artist HUB</span>
                        </div>
                      </li>
                    </a>
                  </ul>
                </div>
              </nav>
            </div>
            <div
              data-thq="thq-navbar-btn-group"
              className="lazy-sats-btn-group"
            >
              <div className="lazy-sats-social-bar">
                <a
                  href="https://twitter.com/LazySats"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lazy-sats-link1"
                >
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="lazy-sats-icon06"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </a>
              </div>
              <a
                href="https://discord.gg/EaNcmJky8H"
                target="_blank"
                rel="noreferrer noopener"
                className="lazy-sats-discord button"
              >
                <span>
                  <span>Discord</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div data-thq="thq-burger-menu" className="lazy-sats-burger-menu">
              <svg viewBox="0 0 1024 1024" className="lazy-sats-icon08">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="lazy-sats-mobile-menu">
              <div
                data-thq="thq-mobile-menu-nav"
                data-role="Nav"
                className="lazy-sats-nav1"
              >
                <div className="lazy-sats-container01">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="lazy-sats-image"
                  />
                  <div
                    data-thq="thq-close-menu"
                    className="lazy-sats-menu-close"
                  >
                    <svg viewBox="0 0 1024 1024" className="lazy-sats-icon10">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <nav
                  data-thq="thq-mobile-menu-nav-links"
                  data-role="Nav"
                  className="lazy-sats-nav2"
                >
                  <span className="lazy-sats-text11">About</span>
                  <span className="lazy-sats-text12">Features</span>
                  <span className="lazy-sats-text13">Pricing</span>
                  <span className="lazy-sats-text14">Team</span>
                  <span className="lazy-sats-text15">Blog</span>
                </nav>
                <div className="lazy-sats-container02">
                  <button className="lazy-sats-login button">Login</button>
                  <button className="button">Register</button>
                </div>
              </div>
              <div className="lazy-sats-icon-group">
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="lazy-sats-icon12"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="lazy-sats-icon14"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="lazy-sats-icon16"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="lazy-sats-intro">
          <div className="lazy-sats-container03">
            <img
              alt="image"
              src="/Lazy Sats/lazysats_logo_white-1000h.png"
              className="lazy-sats-image1"
            />
          </div>
        </div>
        <div className="lazy-sats-welcome-collabs">
          <div className="lazy-sats-info">
            <div className="lazy-sats-container04">
              <div className="lazy-sats-right">
                <h1>WELCOME TO THE LAZY SIDE OF LIFE</h1>
                <span className="lazy-sats-text17">
                  <span>
                    Lazy Sats is a collection of 10.000 distinctive and
                    immutable pixel art characters on the Bitcoin blockchain.
                    Each Lazy Sat carrie’s it’s own individual story, making it
                    a one-of-a-kind creation. The project grants you complete
                    intellectual property rights to the Lazy Sats you own,
                    enabling you to explore endless possibilities and unleash
                    your creative imagination.
                  </span>
                  <br></br>
                  <br></br>
                  <span>
                    Join the Lazy Sats community now and embrace the uniqueness
                    of these funny little pixel characters today.
                  </span>
                  <br></br>
                </span>
                <a
                  href="https://discord.gg/EaNcmJky8H"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lazy-sats-link2 button"
                >
                  Join the community
                </a>
              </div>
            </div>
            <div className="lazy-sats-container05">
              <div className="lazy-sats-container06"></div>
            </div>
          </div>
          <div className="lazy-sats-collaborate">
            <div className="lazy-sats-container07">
              <div className="lazy-sats-left">
                <h1>Collaborations</h1>
                <span className="lazy-sats-text24">
                  Lazy Sats is allocating Whitelist and Allowlist spots to
                  communities all around the globe. If you are interested in a
                  collaboration with Lazy Sats, head over to our Discord and
                  open a support ticket in the #support channel.
                </span>
                <a
                  href="https://discord.gg/EaNcmJky8H"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lazy-sats-link3 button"
                >
                  Request a collaboration
                </a>
              </div>
              <div className="lazy-sats-right1"></div>
            </div>
            <div className="lazy-sats-container08">
              <img
                alt="image"
                src="/Lazy Sats/brain-400h.png"
                className="lazy-sats-image2"
              />
              <img
                alt="image"
                src="/Lazy Sats/bk%20employee%20paper%20bag-400h.png"
                className="lazy-sats-image3"
              />
              <img
                alt="image"
                src="/Lazy Sats/rug%20pull%20police-400h.png"
                className="lazy-sats-image4"
              />
              <img
                alt="image"
                src="/Lazy Sats/skelly%20in%20the%20sun-400h.png"
                className="lazy-sats-image5"
              />
              <img
                alt="image"
                src="/Lazy Sats/jaredfromsubway-400h.png"
                className="lazy-sats-image6"
              />
            </div>
          </div>
        </div>
        <div className="lazy-sats-artist-hub">
          <div className="lazy-sats-container09">
            <div id="artisthub" className="lazy-sats-container10">
              <div className="lazy-sats-container11">
                <h1 className="lazy-sats-text25">Unleash your inner artist</h1>
                <span className="lazy-sats-text26">
                  We enable every member of the community to participate in the
                  collection by giving them the opportunity to create and
                  contribute their own unique traits while earning royalties.
                  Feel free to download our assets and unleash your creativity.
                </span>
              </div>
              <div className="lazy-sats-container12">
                <div className="lazy-sats-artist-hub1">
                  <h1 className="lazy-sats-text27">Artist HUB</h1>
                  <span className="lazy-sats-text28">
                    <span>
                      Welcome to the Lazy Sats Artist HUB, a haven for
                      unleashing your boundless imagination and embracing your
                      inner artist. Here, you have the freedom to create
                      distinctive traits for the Lazy Sats collection, with each
                      selected trait offering the opportunity to earn royalties
                      for its creator.
                    </span>
                    <br></br>
                    <br></br>
                    <span>
                      Craft your own traits in accordance with our guidelines,
                      which you can find below. Once you&apos;ve perfected your
                      masterpiece, simply submit it through the Artist HUB.
                      Remember, there&apos;s no limit to the number of traits
                      you can submit—let your creativity flow without
                      constraint.
                    </span>
                  </span>
                </div>
                <div className="lazy-sats-container13">
                  <div className="lazy-sats-download">
                    <h1 className="lazy-sats-text33">Download</h1>
                    <span className="lazy-sats-text34">
                      Download the Lazy Sats demo canvas below and start
                      creating
                    </span>
                    <a
                      href="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1%22"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="lazy-sats-link4 button"
                    >
                      Download demo asset
                    </a>
                  </div>
                  <div className="lazy-sats-submit">
                    <h1 className="lazy-sats-text35">
                      <span>Submit</span>
                      <br></br>
                    </h1>
                    <form className="lazy-sats-form">
                      <input
                        type="text"
                        name="name"
                        value="Name"
                        required
                        placeholder="placeholder"
                        className="lazy-sats-textinput input"
                      />
                      <input
                        type="text"
                        name="discord"
                        value="Discord"
                        required
                        placeholder="placeholder"
                        className="lazy-sats-textinput1 input"
                      />
                      <input
                        type="text"
                        name="twitter"
                        value="Twitter"
                        placeholder="placeholder"
                        className="lazy-sats-textinput2 input"
                      />
                      <input
                        type="email"
                        name="mail"
                        value="E-Mail"
                        required
                        placeholder="placeholder"
                        className="lazy-sats-textinput3 input"
                      />
                      <input
                        type="text"
                        name="wallet"
                        value="Bitcoin Wallet"
                        required
                        placeholder="placeholder"
                        className="lazy-sats-textinput4 input"
                      />
                      <input
                        type="file"
                        name="wallet"
                        value="Bitcoin Wallet"
                        required
                        placeholder="placeholder"
                        className="lazy-sats-textinput5 input"
                      />
                      <button type="submit" className="lazy-sats-button button">
                        Submit
                      </button>
                    </form>
                    <span className="lazy-sats-text38">
                      Submissions are currently closed. Opening soon!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lazy-sats-artist-hub2"></div>
        <div className="lazy-sats-foot">
          <span>by Lazy Stats - V 1.1</span>
        </div>
      </div>
    </div>
  )
}

export default LazySats
