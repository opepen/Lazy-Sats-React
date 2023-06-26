import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './pixilart-tutorial.css'

const PixilartTutorial = (props) => {
  return (
    <div className="pixilart-tutorial-container">
      <Helmet>
        <title>Lazy Sats - Artist HUB</title>
        <meta property="og:title" content="Lazy Sats - Artist HUB" />
      </Helmet>
      <div className="pixilart-tutorial-hero">
        <div className="pixilart-tutorial-container1">
          <div className="pixilart-tutorial-submit-desktop">
            <img
              alt="image"
              src="/Lazy Sats/collage%202-1400w.png"
              loading="eager"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="pixilart-tutorial-header-image"
            />
            <div className="pixilart-tutorial-artist-hub-info">
              <h1 className="pixilart-tutorial-text">
                <span>Pixilart Tutorial</span>
                <br></br>
              </h1>
              <span className="pixilart-tutorial-text03">
                <span>
                  1. Download the Demo Canvas from the
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <Link to="/" className="pixilart-tutorial-navlink">
                  Artist HUB
                </Link>
                <span> on the main website</span>
                <br></br>
                <span>2. Open </span>
                <a
                  href="https://www.pixilart.com/draw?ref=home-page"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="pixilart-tutorial-link"
                >
                  https://www.pixilart.com/draw
                </a>
                <br></br>
                <span>
                  3. A popup should appear asking you to create a new image
                </span>
                <br></br>
                <span>
                  4. On the left side of the popup click &quot;Open Image&quot;
                </span>
                <br></br>
                <span>5. Choose the Demo Canvas and open it</span>
                <br></br>
                <br></br>
                <span>
                  You have now successfully loaded the Demo Canvas. Now
                  let&apos;s start creating traits
                </span>
                <br></br>
                <br></br>
                <span>
                  1. Create a new layer by clicking the circle with the plus
                  symbol in the panel on the right side
                </span>
                <br></br>
                <span>2. Start drawing your trait</span>
                <br></br>
                <br></br>
                <span>
                  Unleash your creativity and draw you trait. Once finished
                  follow the following steps to export it
                </span>
                <br></br>
                <br></br>
                <span>1. Go to the layers in the right panel</span>
                <br></br>
                <span>
                  2. Click on the Eye symbol of the Demo Canvas to hide it
                </span>
                <br></br>
                <span>3. In the top menu click &quot;File&quot;</span>
                <br></br>
                <span>4. Click &quot;Export / Download&quot;</span>
                <br></br>
                <span>5. Click &quot;Download .png&quot;</span>
                <br></br>
                <span>6. Save the image file to your device</span>
                <br></br>
                <br></br>
                <span>
                  Now it&apos;s time to submit your trait. Simply head over to
                  our Discord, open a ticket and send us your creations.
                </span>
                <br></br>
                <br></br>
              </span>
            </div>
            <div className="pixilart-tutorial-submit">
              <Link
                to="/"
                name="submit-trait"
                className="pixilart-tutorial-navlink1 button"
              >
                Return home
              </Link>
            </div>
          </div>
          <div className="pixilart-tutorial-submit-mobile">
            <img
              alt="image"
              src="/Lazy Sats/collage%202-1400w.png"
              loading="eager"
              image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
              className="pixilart-tutorial-header-image1"
            />
            <div className="pixilart-tutorial-artist-hub-info1">
              <h1 className="pixilart-tutorial-text43">Pixilart tutorial</h1>
              <span className="pixilart-tutorial-text44">
                <span>
                  1. Download the Demo Canvas from the Artist HUB on the main
                  website
                </span>
                <br></br>
                <span>2. Open https://www.pixilart.com/draw</span>
                <br></br>
                <span>
                  3. A popup should appear asking you to create a new image
                </span>
                <br></br>
                <span>
                  4. On the left side of the popup click &quot;Open Image&quot;
                </span>
                <br></br>
                <span>5. Choose the Demo Canvas and open it</span>
                <br></br>
                <br></br>
                <span>
                  You have now successfully loaded the Demo Canvas. Now
                  let&apos;s start creating traits
                </span>
                <br></br>
                <br></br>
                <span>
                  1. Create a new layer by clicking the circle with the plus
                  symbol in the panel on the right side
                </span>
                <br></br>
                <span>2. Start drawing your trait</span>
                <br></br>
                <br></br>
                <span>
                  Unleash your creativity and draw you trait. Once finished
                  follow the following steps to export it
                </span>
                <br></br>
                <br></br>
                <span>1. Go to the layers in the right panel</span>
                <br></br>
                <span>
                  2. Click on the Eye symbol of the Demo Canvas to hide it
                </span>
                <br></br>
                <span>3. In the top menu click &quot;File&quot;</span>
                <br></br>
                <span>4. Click &quot;Export / Download&quot;</span>
                <br></br>
                <span>5. Click &quot;Download .png&quot;</span>
                <br></br>
                <span>6. Save the image file to your device</span>
                <br></br>
                <br></br>
                <span>
                  Now it&apos;s time to submit your trait. Simply head over to
                  our Discord, open a ticket and send us your creations.
                </span>
              </span>
            </div>
            <div className="pixilart-tutorial-submit1"></div>
            <Link
              to="/"
              name="submit-trait"
              className="pixilart-tutorial-navlink2 button"
            >
              Return home
            </Link>
          </div>
        </div>
      </div>
      <div className="pixilart-tutorial-social-bar">
        <a
          href="https://twitter.com/LazySats"
          target="_blank"
          rel="noreferrer noopener"
          className="pixilart-tutorial-link1"
        >
          <svg
            viewBox="0 0 950.8571428571428 1024"
            className="pixilart-tutorial-icon"
          >
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </a>
      </div>
    </div>
  )
}

export default PixilartTutorial
