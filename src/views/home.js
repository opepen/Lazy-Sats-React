import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

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
              <div
                data-thq="thq-dropdown"
                className="home-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle"
                >
                  <span className="home-text">Socials</span>
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
                      className="home-dropdown list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle1"
                      >
                        <span className="home-text01">Twitter</span>
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
                      className="home-dropdown1 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle2"
                      >
                        <span className="home-text02">Discord</span>
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
                      className="home-dropdown2 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle3"
                      >
                        <span className="home-text03">Subber</span>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle4"
                >
                  <span className="home-text04">Creators</span>
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
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown3 list-item"
                  >
                    <a href="#artisthub">
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-dropdown-toggle5"
                      >
                        <span className="home-text05">Artist HUB</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-thq-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-dropdown-toggle6"
                >
                  <span className="home-text06">Lazy Life</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-dropdown-toggle7"
                    >
                      <span className="home-text07">Lazy Beats</span>
                    </div>
                  </li>
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
            <svg viewBox="0 0 1024 1024" className="home-icon06">
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
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
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
              <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
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
            className="home-image01"
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
              className="home-image02"
            />
            <img
              alt="image"
              src="/Lazy Sats/bk%20employee%20paper%20bag-1500w.png"
              className="home-image03"
            />
            <img
              alt="image"
              src="/Lazy Sats/rug%20pull%20police-400h.png"
              className="home-image04"
            />
            <img
              alt="image"
              src="/Lazy Sats/skelly%20in%20the%20sun-400h.png"
              className="home-image05"
            />
            <img
              alt="image"
              src="/Lazy Sats/jaredfromsubway-1500w.png"
              className="home-image06"
            />
          </div>
        </div>
      </div>
      <div id="artisthub" className="home-hero">
        <div className="home-container10">
          <div className="home-artist-hub-desktop">
            <div className="home-artist-hub-info">
              <h1 className="home-text25">Artist HUB</h1>
              <span className="home-text26">
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
            <div className="home-guidelines">
              <h1 className="home-text31">Guidelines</h1>
              <div className="home-touching-border">
                <div className="home-container11">
                  <img
                    alt="image"
                    src="f386a6e8-8348-44f9-8f83-b3e4e885f21e"
                    className="home-image07"
                  />
                </div>
                <div className="home-container12">
                  <h1 className="home-text32">Touching the border</h1>
                  <span className="home-text33">
                    <span>
                      Traits should never touch the border of the image on any
                      side. Always make sure there is at least one pixel of
                      space between your trait and the border
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-missing-border">
                <div className="home-container13">
                  <img
                    alt="image"
                    src="0a13a6b6-0416-4ee7-a721-752f82f27186"
                    className="home-image08"
                  />
                </div>
                <div className="home-container14">
                  <h1 className="home-text37">Missing black border</h1>
                  <span className="home-text38">
                    <span>Every trait should have a black border around</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-missing-border1">
                <div className="home-container15">
                  <img
                    alt="image"
                    src="3302ee4a-0c66-48d6-9431-05bf1a8e0839"
                    className="home-image09"
                  />
                </div>
                <div className="home-container16">
                  <h1 className="home-text42">24 x 24 Pixels</h1>
                  <span className="home-text43">
                    <span>
                      Traits should always be uploaded in 24 x 24 pixel.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-download">
              <h1 className="home-text46">Download</h1>
              <span className="home-text47">
                Download the Lazy Sats demo canvas below and start creating
              </span>
              <a
                href='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
                data-download-url='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6 button"
              >
                <span className="home-text48">
                  <span>Download</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="home-submit">
              <h1 className="home-text51">Submit</h1>
              <span className="home-text52">
                Click the button below to submit your trait
              </span>
              <Link to="/submit" className="home-navlink button">
                <span className="home-text53">
                  <span>Submit</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
          <div className="home-artist-hub-mobile">
            <img
              alt="image"
              src="/Lazy Sats/collage%202-1400w.png"
              loading="eager"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="home-header-image"
            />
            <div className="home-artist-hub-info1">
              <h1 className="home-text56">Lazy Sats Artist HUB</h1>
              <span className="home-text57">
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
            <div className="home-guidelines1">
              <h1 className="home-text62">Guidelines</h1>
              <div className="home-touching-border1">
                <div className="home-container17">
                  <img
                    alt="image"
                    src="f386a6e8-8348-44f9-8f83-b3e4e885f21e"
                    className="home-image10"
                  />
                </div>
                <div className="home-container18">
                  <h1 className="home-text63">Touching the border</h1>
                  <span className="home-text64">
                    <span>
                      Traits should never touch the border of the image on any
                      side. Always make sure there is at least one pixel of
                      space between your trait and the border
                    </span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-missing-border2">
                <div className="home-container19">
                  <img
                    alt="image"
                    src="0a13a6b6-0416-4ee7-a721-752f82f27186"
                    className="home-image11"
                  />
                </div>
                <div className="home-container20">
                  <h1 className="home-text68">Missing black border</h1>
                  <span className="home-text69">
                    <span>Every trait should have a black border around</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
              <div className="home-missing-border3">
                <div className="home-container21">
                  <img
                    alt="image"
                    src="3302ee4a-0c66-48d6-9431-05bf1a8e0839"
                    className="home-image12"
                  />
                </div>
                <div className="home-container22">
                  <h1 className="home-text73">24 x 24 Pixels</h1>
                  <span className="home-text74">
                    <span>
                      Traits should always be uploaded in 24 x 24 pixel.
                    </span>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-download1">
              <h1 className="home-text77">Download</h1>
              <span className="home-text78">
                Download the Lazy Sats demo canvas below and start creating
              </span>
              <a
                href='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
                data-download-url='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7 button"
              >
                <span>
                  <span>Download</span>
                  <br></br>
                </span>
              </a>
            </div>
            <div className="home-submit1">
              <h1 className="home-text82">Submit</h1>
              <span className="home-text83">
                Click the button below to submit your trait
              </span>
              <Link
                to="/submit"
                data-download-url='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
                className="home-navlink1 button"
              >
                <span>
                  <span>Submit</span>
                  <br></br>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="home-social-bar">
        <Link to="/lazy-sats" className="home-navlink2">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon16">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home
