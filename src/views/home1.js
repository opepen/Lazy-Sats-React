import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import CollaborationCard from '../components/collaboration-card'
import ArtistCard from '../components/artist-card'
import ArtistHUB1 from '../components/artist-hub1'
import './home1.css'

const Home1 = (props) => {
  return (
    <div className="home1-container">
      <Helmet>
        <title>Lazy Sats</title>
        <meta property="og:title" content="Lazy Sats" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/6e2973bd-71c7-4bac-9808-a3bbed23950a?org_if_sml=1"
        />
      </Helmet>
      <div className="home1-container01">
        <header data-thq="thq-navbar" className="home1-navbar-interactive">
          <img
            alt="logo"
            src="/Lazy Sats/lazysats_logo_white-1000h.png"
            className="home1-logo"
          />
          <div
            data-role="Nav"
            data-thq="thq-navbar-nav"
            className="home1-desktop-menu"
          >
            <nav
              data-role="Nav"
              data-thq="thq-navbar-nav-links"
              className="home1-nav"
            >
              <div
                data-thq="thq-dropdown"
                className="home1-thq-dropdown list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home1-dropdown-toggle"
                >
                  <span className="home1-text">Socials</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home1-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="home1-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home1-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home1-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home1-dropdown-toggle1"
                    >
                      <span className="home1-text01">Twitter</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home1-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home1-dropdown-toggle2"
                    >
                      <span className="home1-text02">Discord</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home1-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home1-dropdown-toggle3"
                    >
                      <span className="home1-text03">Subber</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home1-thq-dropdown1 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home1-dropdown-toggle4"
                >
                  <span className="home1-text04">Creators</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home1-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="home1-icon02">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home1-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home1-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home1-dropdown-toggle5"
                    >
                      <span className="home1-text05">Artist HUB</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home1-thq-dropdown2 list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home1-dropdown-toggle6"
                >
                  <span className="home1-text06">Lazy Life</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home1-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="home1-icon04">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home1-dropdown-list2"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home1-dropdown4 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home1-dropdown-toggle7"
                    >
                      <span className="home1-text07">Lazy Beats</span>
                    </div>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home1-btn-group">
            <button className="home1-register button button_grey_1">
              <span className="home1-text08">
                <span>Discord</span>
                <br></br>
              </span>
            </button>
          </div>
          <div data-thq="thq-burger-menu" className="home1-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home1-icon06">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home1-mobile-menu">
            <div
              data-role="Nav"
              data-thq="thq-mobile-menu-nav"
              className="home1-nav1"
            >
              <div className="home1-container02">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="home1-image"
                />
                <div data-thq="thq-close-menu" className="home1-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home1-icon08">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-role="Nav"
                data-thq="thq-mobile-menu-nav-links"
                className="home1-nav2"
              >
                <span className="home1-text11">About</span>
                <span className="home1-text12">Features</span>
                <span className="home1-text13">Pricing</span>
                <span className="home1-text14">Team</span>
                <span className="home1-text15">Blog</span>
              </nav>
              <div className="home1-container03">
                <button className="home1-login button">Login</button>
                <button className="button">Register</button>
              </div>
            </div>
            <div className="home1-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home1-icon10"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home1-icon12"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home1-icon14"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home1-intro">
        <div className="home1-container04">
          <img
            alt="image"
            src="/Lazy Sats/lazysats_logo_white-1000h.png"
            className="home1-image1"
          />
        </div>
      </div>
      <div className="home1-welcome-collabs">
        <div className="home1-info">
          <div className="home1-container05">
            <div className="home1-right">
              <h1 className="home1-text16">WELCOME TO THE LAZY SIDE OF LIFE</h1>
              <span className="home1-text17">
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
                className="home1-link button"
              >
                Join the community
              </a>
            </div>
          </div>
          <div className="home1-container06">
            <div className="home1-container07"></div>
          </div>
        </div>
        <div className="home1-collaborate">
          <div className="home1-container08">
            <div className="home1-left">
              <h1 className="home1-text23">Collaborations</h1>
              <span className="home1-text24">
                Lazy Sats is allocating Whitelist and Allowlist spots to
                communities all around the globe. If you are interested in a
                collaboration with Lazy Sats, head over to our Discord and open
                a support ticket in the #support channel.
              </span>
              <a
                href="https://discord.gg/EaNcmJky8H"
                target="_blank"
                rel="noreferrer noopener"
                className="home1-link1 button"
              >
                Request a collaboration
              </a>
            </div>
            <div className="home1-right1"></div>
          </div>
          <div className="home1-container09">
            <img
              alt="image"
              src="/Lazy Sats/brain-400h.png"
              className="home1-image2"
            />
            <img
              alt="image"
              src="/Lazy Sats/bk%20employee%20paper%20bag-1500w.png"
              className="home1-image3"
            />
            <img
              alt="image"
              src="/Lazy Sats/rug%20pull%20police-400h.png"
              className="home1-image4"
            />
            <img
              alt="image"
              src="/Lazy Sats/skelly%20in%20the%20sun-400h.png"
              className="home1-image5"
            />
            <img
              alt="image"
              src="/Lazy Sats/jaredfromsubway-1500w.png"
              className="home1-image6"
            />
          </div>
        </div>
      </div>
      <div className="home1-artist-hub">
        <div className="home1-container10">
          <div id="artisthub" className="home1-container11">
            <div className="home1-container12">
              <span className="home1-text25">
                We enable every member of the community to participate in the
                collection by giving them the opportunity to create and
                contribute their own unique traits while earning royalties. Feel
                free to download our assets and unleash your creativity.
              </span>
            </div>
            <div className="home1-container13">
              <div className="home1-artist-hub1">
                <h1 className="home1-text26">Artist HUB</h1>
                <span className="home1-text27">
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
                    Craft your own traits in accordance with our guidelines,
                    which you can find below. Once you&apos;ve perfected your
                    masterpiece, simply submit it through the Artist HUB.
                    Remember, there&apos;s no limit to the number of traits you
                    can submit—let your creativity flow without constraint.
                  </span>
                </span>
              </div>
              <div className="home1-container14">
                <div className="home1-download">
                  <h1 className="home1-text32">Download</h1>
                  <span className="home1-text33">
                    Download the Lazy Sats demo canvas below and start creating
                  </span>
                  <a
                    href="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1%22"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home1-link2 button"
                  >
                    Download demo asset
                  </a>
                </div>
                <div className="home1-submit">
                  <h1 className="home1-text34">
                    <span>Submit</span>
                    <br></br>
                  </h1>
                  <form className="home1-form">
                    <input
                      type="text"
                      name="name"
                      value="Name"
                      required
                      placeholder="placeholder"
                      className="home1-textinput input"
                    />
                    <input
                      type="text"
                      name="discord"
                      value="Discord"
                      required
                      placeholder="placeholder"
                      className="home1-textinput1 input"
                    />
                    <input
                      type="text"
                      name="twitter"
                      value="Twitter"
                      placeholder="placeholder"
                      className="home1-textinput2 input"
                    />
                    <input
                      type="email"
                      name="mail"
                      value="E-Mail"
                      required
                      placeholder="placeholder"
                      className="home1-textinput3 input"
                    />
                    <input
                      type="text"
                      name="wallet"
                      value="Bitcoin Wallet"
                      required
                      placeholder="placeholder"
                      className="home1-textinput4 input"
                    />
                    <input
                      type="file"
                      name="wallet"
                      value="Bitcoin Wallet"
                      required
                      placeholder="placeholder"
                      className="home1-textinput5 input"
                    />
                    <button type="submit" className="home1-button button">
                      Submit
                    </button>
                  </form>
                  <span className="home1-text37">
                    Submissions are currently closed. Opening soon!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-hero">
        <div className="home1-hero1">
          <div className="home1-container15">
            <div className="home1-blog-post-card">
              <img
                alt="image"
                src="/Lazy Sats/collage%202-1400w.png"
                loading="eager"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="home1-image7"
              />
              <div className="home1-container16">
                <span className="home1-text38">
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
                </span>
                <div className="home1-container17">
                  <div className="home1-container18">
                    <a
                      href="https://discord.gg/EaNcmJky8H"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home1-link3 button"
                    >
                      Join the Discord
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home1-information">
        <div className="home1-information1">
          <div className="home1-container19">
            <CollaborationCard
              title="Collaborations"
              button="Request Collaboration"
              image_src="/Lazy Sats/bk%20employee%20paper%20bag-1500w.png"
              description="Lazy Sats is allocating Whitelist and Allowlist spots to communities all around the globe. If you are interested in a collaboration with Lazy Sats, head over to our Discord and open a support ticket in the #support channel."
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName3"
            ></CollaborationCard>
            <ArtistCard
              title="Unleash your inner artist"
              button="Enter Artist HUB"
              image_src="/Lazy Sats/jaredfromsubway-1500w.png"
              description="We enable every member of the community to participate in the collection by giving them the opportunity to create and contribute their own unique traits while earning royalties. Feel free to download our assets and unleash your creativity."
              rootClassName="artist-card-root-class-name2"
            ></ArtistCard>
          </div>
        </div>
      </div>
      <ArtistHUB1 rootClassName="artist-hub1-root-class-name1"></ArtistHUB1>
      <div className="home1-social-bar">
        <Link to="/lazy-sats" className="home1-navlink">
          <svg viewBox="0 0 950.8571428571428 1024" className="home1-icon16">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home1
