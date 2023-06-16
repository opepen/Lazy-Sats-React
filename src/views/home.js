import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import ArtistHUB1 from '../components/artist-hub1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Lazy Sats</title>
        <meta property="og:title" content="Lazy Sats" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/6e2973bd-71c7-4bac-9808-a3bbed23950a?org_if_sml=1"
        />
      </Helmet>
      <div className="home-container01">
        <header data-thq="thq-navbar" className="home-navbar-interactive">
          <img
            alt="logo"
            src="/Lazy Sats/lazysats_logo_white-1000h.png"
            className="home-logo"
          />
          <div
            data-role="Nav"
            data-thq="thq-navbar-nav"
            className="home-desktop-menu"
          >
            <nav
              data-role="Nav"
              data-thq="thq-navbar-nav-links"
              className="home-nav"
            >
              <div data-thq="thq-dropdown" className="home-socials list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle"
                >
                  <span className="home-text">
                    <span>Socials</span>
                    <br></br>
                  </span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul data-thq="thq-dropdown-list" className="home-dropdown-list">
                  <a
                    href="https://twitter.com/LazySats"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-twitter list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle1"
                      >
                        <span className="home-text03">Twitter</span>
                      </div>
                    </li>
                  </a>
                  <a
                    href="https://discord.gg/EaNcmJky8H"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-discord list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <span className="home-text04">Discord</span>
                      </div>
                    </li>
                  </a>
                  <a
                    href="https://subber.xyz/LazySats"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <li
                      data-thq="thq-dropdown"
                      className="home-subber list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle3"
                      >
                        <span className="home-text05">Subber</span>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
              <div data-thq="thq-dropdown" className="home-creators list-item">
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle4"
                >
                  <span className="home-text06">Creators</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list1"
                >
                  <a href="#artisthub">
                    <li
                      data-thq="thq-dropdown"
                      className="home-artist-hub list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle5"
                      >
                        <span className="home-text07">Artist HUB</span>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-btn-group">
            <a
              href="https://discord.gg/EaNcmJky8H"
              target="_blank"
              rel="noreferrer noopener"
              className="home-register button button_grey_1"
            >
              <span className="home-text08">
                <span>Discord</span>
                <br></br>
              </span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-mobile-menu">
            <div
              data-role="Nav"
              data-thq="thq-mobile-menu-nav"
              className="home-nav1"
            >
              <div className="home-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home-image"
                />
                <div data-thq="thq-close-menu" className="home-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-icon06">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-role="Nav"
                data-thq="thq-mobile-menu-nav-links"
                className="home-nav2"
              >
                <span className="home-text11">About</span>
                <span className="home-text12">Features</span>
                <span className="home-text13">Pricing</span>
                <span className="home-text14">Team</span>
                <span className="home-text15">Blog</span>
              </nav>
              <div className="home-container03">
                <button className="home-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home-icon-group">
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon08">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon10">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon12">
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-intro">
        <div className="home-container04">
          <img
            alt="image"
            src="/Lazy Sats/lazysats_logo_white-1000h.png"
            className="home-image1"
          />
        </div>
      </div>
      <div className="home-welcome-collabs">
        <div className="home-info">
          <div className="home-container05">
            <div className="home-right">
              <h1 className="home-text16">WELCOME TO THE LAZY SIDE OF LIFE</h1>
              <span className="home-text17">
                <span>
                  Lazy Sats is a collection of 10.000 distinctive and immutable
                  pixel art characters on the Bitcoin blockchain. Each Lazy Sat
                  carrie’s it’s own individual story, making it a one-of-a-kind
                  creation. The project grants you complete intellectual
                  property rights to the Lazy Sats you own, enabling you to
                  explore endless possibilities and unleash your creative
                  imagination.
                </span>
                <br></br>
                <br></br>
                <span>
                  Join the Lazy Sats community now and embrace the uniqueness of
                  these funny little pixel characters today.
                </span>
                <br></br>
              </span>
              <a
                href="https://discord.gg/EaNcmJky8H"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4 button"
              >
                Join the community
              </a>
            </div>
          </div>
          <div className="home-container06">
            <div className="home-container07"></div>
          </div>
        </div>
        <div className="home-collaborate">
          <div className="home-container08">
            <div className="home-left">
              <h1 className="home-text23">Collaborations</h1>
              <span className="home-text24">
                Lazy Sats is allocating Whitelist and Allowlist spots to
                communities all around the globe. If you are interested in a
                collaboration with Lazy Sats, head over to our Discord and open
                a support ticket in the #support channel.
              </span>
              <a
                href="https://discord.gg/EaNcmJky8H"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5 button"
              >
                Request a collaboration
              </a>
            </div>
            <div className="home-right1"></div>
          </div>
          <div className="home-container09">
            <img
              alt="image"
              src="/Lazy Sats/brain-400h.png"
              className="home-image2"
            />
            <img
              alt="image"
              src="/Lazy Sats/bk%20employee%20paper%20bag-1500w.png"
              className="home-image3"
            />
            <img
              alt="image"
              src="/Lazy Sats/rug%20pull%20police-400h.png"
              className="home-image4"
            />
            <img
              alt="image"
              src="/Lazy Sats/skelly%20in%20the%20sun-400h.png"
              className="home-image5"
            />
            <img
              alt="image"
              src="/Lazy Sats/jaredfromsubway-1500w.png"
              className="home-image6"
            />
          </div>
        </div>
      </div>
      <div id="artisthub" className="home-container10">
        <ArtistHUB1 rootClassName="artist-hub1-root-class-name1"></ArtistHUB1>
      </div>
      <div className="home-social-bar">
        <Link to="/lazy-sats" className="home-navlink">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home
