import React from 'react'

import PropTypes from 'prop-types'

import './home-new.css'

const HomeNew = (props) => {
  return (
    <div className={`home-new-container ${props.rootClassName} `}>
      <div className="home-new-header">
        <header data-thq="thq-navbar" className="home-new-navbar-interactive">
          <img
            alt={props.Logo_alt}
            src={props.Logo_src}
            className="home-new-logo"
          />
          <div
            data-thq="thq-navbar-nav"
            data-role="Nav"
            className="home-new-desktop-menu"
          >
            <nav
              data-thq="thq-navbar-nav-links"
              data-role="Nav"
              className="home-new-nav"
            >
              <div
                data-thq="thq-dropdown"
                className="home-new-ordinals list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-new-dropdown-toggle"
                >
                  <span className="home-new-text">{props.text8}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-new-dropdown-arrow"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-new-icon">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-new-dropdown-list"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-new-dropdown list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-new-dropdown-toggle1"
                    >
                      <span className="home-new-text01">{props.text13}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-new-market list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-new-dropdown-toggle2"
                >
                  <span className="home-new-text02">{props.text9}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-new-dropdown-arrow1"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-new-icon02">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-new-dropdown-list1"
                >
                  <li
                    data-thq="thq-dropdown"
                    className="home-new-dropdown1 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-new-dropdown-toggle3"
                    >
                      <span className="home-new-text03">{props.text14}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-new-dropdown2 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-new-dropdown-toggle4"
                    >
                      <span className="home-new-text04">{props.text15}</span>
                    </div>
                  </li>
                  <li
                    data-thq="thq-dropdown"
                    className="home-new-dropdown3 list-item"
                  >
                    <div
                      data-thq="thq-dropdown-toggle"
                      className="home-new-dropdown-toggle5"
                    >
                      <span className="home-new-text05">{props.text16}</span>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                data-thq="thq-dropdown"
                className="home-new-creators list-item"
              >
                <div
                  data-thq="thq-dropdown-toggle"
                  className="home-new-dropdown-toggle6"
                >
                  <span className="home-new-text06">{props.text10}</span>
                  <div
                    data-thq="thq-dropdown-arrow"
                    className="home-new-dropdown-arrow2"
                  >
                    <svg viewBox="0 0 1024 1024" className="home-new-icon04">
                      <path d="M426 726v-428l214 214z"></path>
                    </svg>
                  </div>
                </div>
                <ul
                  data-thq="thq-dropdown-list"
                  className="home-new-dropdown-list2"
                >
                  <a href="#artisthub">
                    <li
                      data-thq="thq-dropdown"
                      className="home-new-dropdown4 list-item"
                    >
                      <div
                        data-thq="thq-dropdown-toggle"
                        className="home-new-dropdown-toggle7"
                      >
                        <span className="home-new-text07">{props.text17}</span>
                      </div>
                    </li>
                  </a>
                </ul>
              </div>
            </nav>
          </div>
          <div data-thq="thq-navbar-btn-group" className="home-new-btn-group">
            <div className="home-new-social-bar">
              <a
                href="https://twitter.com/LazySats"
                target="_blank"
                rel="noreferrer noopener"
                className="home-new-link1"
              >
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-new-icon06"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
              </a>
            </div>
            <a
              href={props.link_Discord}
              target="_blank"
              rel="noreferrer noopener"
              className="home-new-discord button"
            >
              <span>
                <span>Discord</span>
                <br></br>
              </span>
            </a>
          </div>
          <div data-thq="thq-burger-menu" className="home-new-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-new-icon08">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="home-new-mobile-menu">
            <div
              data-thq="thq-mobile-menu-nav"
              data-role="Nav"
              className="home-new-nav1"
            >
              <div className="home-new-container01">
                <img
                  alt={props.image_alt6}
                  src={props.image_src6}
                  className="home-new-image"
                />
                <div data-thq="thq-close-menu" className="home-new-menu-close">
                  <svg viewBox="0 0 1024 1024" className="home-new-icon10">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav
                data-thq="thq-mobile-menu-nav-links"
                data-role="Nav"
                className="home-new-nav2"
              >
                <span className="home-new-text11">{props.text3}</span>
                <span className="home-new-text12">{props.text4}</span>
                <span className="home-new-text13">{props.text5}</span>
                <span className="home-new-text14">{props.text6}</span>
                <span className="home-new-text15">{props.text7}</span>
              </nav>
              <div className="home-new-container02">
                <button className="home-new-login button">{props.Login}</button>
                <button className="button">{props.Register}</button>
              </div>
            </div>
            <div className="home-new-icon-group">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-new-icon12"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-new-icon14"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-new-icon16"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <div className="home-new-intro">
        <div className="home-new-container03">
          <img
            alt={props.image_alt}
            src={props.image_src}
            className="home-new-image1"
          />
        </div>
      </div>
      <div className="home-new-container04">
        <div className="home-new-info">
          <div className="home-new-container05">
            <div className="home-new-right">
              <h1>{props.heading}</h1>
              <span className="home-new-text17">
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
                href={props.link_button}
                target="_blank"
                rel="noreferrer noopener"
                className="home-new-link2 button"
              >
                {props.button}
              </a>
            </div>
          </div>
          <div className="home-new-container06">
            <div className="home-new-container07"></div>
          </div>
        </div>
        <div className="home-new-collaborate">
          <div className="home-new-container08">
            <div className="home-new-left">
              <h1>{props.heading1}</h1>
              <span className="home-new-text24">{props.text1}</span>
              <a
                href={props.link_button1}
                target="_blank"
                rel="noreferrer noopener"
                className="home-new-link3 button"
              >
                {props.button1}
              </a>
            </div>
            <div className="home-new-right1"></div>
          </div>
          <div className="home-new-container09">
            <img
              alt={props.image_alt1}
              src={props.image_src1}
              className="home-new-image2"
            />
            <img
              alt={props.image_alt2}
              src={props.image_src2}
              className="home-new-image3"
            />
            <img
              alt={props.image_alt3}
              src={props.image_src3}
              className="home-new-image4"
            />
            <img
              alt={props.image_alt4}
              src={props.image_src4}
              className="home-new-image5"
            />
            <img
              alt={props.image_alt5}
              src={props.image_src5}
              className="home-new-image6"
            />
          </div>
        </div>
      </div>
      <div className="home-new-artist-hub">
        <div className="home-new-container10">
          <div id="artisthub" className="home-new-container11">
            <div className="home-new-container12">
              <h1 className="home-new-text25">{props.heading2}</h1>
              <span className="home-new-text26">{props.text2}</span>
            </div>
            <div className="home-new-container13">
              <div className="home-new-artist-hub1">
                <h1 className="home-new-text27">{props.heading3}</h1>
                <span className="home-new-text28">
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
              <div className="home-new-container14">
                <div className="home-new-download">
                  <h1 className="home-new-text33">{props.heading4}</h1>
                  <span className="home-new-text34">{props.text11}</span>
                  <a
                    href={props.link_button2}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="home-new-link4 button"
                  >
                    {props.button2}
                  </a>
                </div>
                <div className="home-new-submit">
                  <h1 className="home-new-text35">
                    <span>Submit</span>
                    <br></br>
                  </h1>
                  <form className="home-new-form">
                    <input
                      type="text"
                      name="name"
                      value="Name"
                      required
                      placeholder={props.textinput_placeholder}
                      className="home-new-textinput input"
                    />
                    <input
                      type="text"
                      name="discord"
                      value="Discord"
                      required
                      placeholder={props.textinput_placeholder1}
                      className="home-new-textinput1 input"
                    />
                    <input
                      type="text"
                      name="twitter"
                      value="Twitter"
                      placeholder={props.textinput_placeholder2}
                      className="home-new-textinput2 input"
                    />
                    <input
                      type="email"
                      name="mail"
                      value="E-Mail"
                      required
                      placeholder={props.textinput_placeholder3}
                      className="home-new-textinput3 input"
                    />
                    <input
                      type="text"
                      name="wallet"
                      value="Bitcoin Wallet"
                      required
                      placeholder={props.textinput_placeholder4}
                      className="home-new-textinput4 input"
                    />
                    <input
                      type="file"
                      name="wallet"
                      value="Bitcoin Wallet"
                      required
                      placeholder={props.textinput_placeholder5}
                      className="home-new-textinput5 input"
                    />
                    <button type="submit" className="home-new-button button">
                      {props.button3}
                    </button>
                  </form>
                  <span className="home-new-text38">{props.text12}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-new-artist-hub2"></div>
      <div className="home-new-footer">
        <span>{props.text}</span>
      </div>
    </div>
  )
}

HomeNew.defaultProps = {
  image_src4: '/Lazy Sats/skelly%20in%20the%20sun-400h.png',
  button1: 'Request a collaboration',
  image_src: '/Lazy Sats/lazysats_logo_white-1000h.png',
  text11: 'Download the Lazy Sats demo canvas below and start creating',
  textinput_placeholder: 'placeholder',
  text: 'by Lazy Stats - V 1.1',
  textinput_placeholder4: 'placeholder',
  text2:
    'We enable every member of the community to participate in the collection by giving them the opportunity to create and contribute their own unique traits while earning royalties. Feel free to download our assets and unleash your creativity.',
  heading1: 'Collaborations',
  text4: 'Features',
  link_button2:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1%22',
  image_alt2: 'image',
  textinput_placeholder2: 'placeholder',
  image_alt5: 'image',
  button: 'Join the community',
  text12: 'Submissions are currently closed. Opening soon!',
  rootClassName: '',
  image_alt: 'image',
  text7: 'Blog',
  textinput_placeholder3: 'placeholder',
  heading: 'WELCOME TO THE LAZY SIDE OF LIFE',
  image_alt4: 'image',
  image_src6:
    'https://presentation-website-assets.teleporthq.io/logos/logo.png',
  text1:
    'Lazy Sats is allocating Whitelist and Allowlist spots to communities all around the globe. If you are interested in a collaboration with Lazy Sats, head over to our Discord and open a support ticket in the #support channel.',
  button2: 'Download demo asset',
  text6: 'Team',
  heading2: 'Unleash your inner artist',
  image_alt1: 'image',
  text5: 'Pricing',
  textinput_placeholder5: 'placeholder',
  image_src1: '/Lazy Sats/brain-400h.png',
  image_src5: '/Lazy Sats/jaredfromsubway-400h.png',
  text17: 'Artist HUB',
  button3: 'Submit',
  Login: 'Login',
  heading4: 'Download',
  text16: 'Ordinals Market',
  Logo_alt: 'logo',
  image_alt3: 'image',
  image_src2: '/Lazy Sats/bk%20employee%20paper%20bag-400h.png',
  text8: 'Ordinals',
  image_alt6: 'image',
  text10: 'Creators',
  textinput_placeholder1: 'placeholder',
  text14: 'MagicEden',
  Register: 'Register',
  heading3: 'Artist HUB',
  image_src3: '/Lazy Sats/rug%20pull%20police-400h.png',
  link_button: 'https://discord.gg/EaNcmJky8H',
  text15: 'Gamma',
  Logo_src: '/Lazy Sats/rescaled_image1-200h.png',
  text13: 'Mint',
  link_Discord: 'https://discord.gg/EaNcmJky8H',
  link_button1: 'https://discord.gg/EaNcmJky8H',
  text3: 'About',
  text9: 'Market',
}

HomeNew.propTypes = {
  image_src4: PropTypes.string,
  button1: PropTypes.string,
  image_src: PropTypes.string,
  text11: PropTypes.string,
  textinput_placeholder: PropTypes.string,
  text: PropTypes.string,
  textinput_placeholder4: PropTypes.string,
  text2: PropTypes.string,
  heading1: PropTypes.string,
  text4: PropTypes.string,
  link_button2: PropTypes.string,
  image_alt2: PropTypes.string,
  textinput_placeholder2: PropTypes.string,
  image_alt5: PropTypes.string,
  button: PropTypes.string,
  text12: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  text7: PropTypes.string,
  textinput_placeholder3: PropTypes.string,
  heading: PropTypes.string,
  image_alt4: PropTypes.string,
  image_src6: PropTypes.string,
  text1: PropTypes.string,
  button2: PropTypes.string,
  text6: PropTypes.string,
  heading2: PropTypes.string,
  image_alt1: PropTypes.string,
  text5: PropTypes.string,
  textinput_placeholder5: PropTypes.string,
  image_src1: PropTypes.string,
  image_src5: PropTypes.string,
  text17: PropTypes.string,
  button3: PropTypes.string,
  Login: PropTypes.string,
  heading4: PropTypes.string,
  text16: PropTypes.string,
  Logo_alt: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src2: PropTypes.string,
  text8: PropTypes.string,
  image_alt6: PropTypes.string,
  text10: PropTypes.string,
  textinput_placeholder1: PropTypes.string,
  text14: PropTypes.string,
  Register: PropTypes.string,
  heading3: PropTypes.string,
  image_src3: PropTypes.string,
  link_button: PropTypes.string,
  text15: PropTypes.string,
  Logo_src: PropTypes.string,
  text13: PropTypes.string,
  link_Discord: PropTypes.string,
  link_button1: PropTypes.string,
  text3: PropTypes.string,
  text9: PropTypes.string,
}

export default HomeNew
