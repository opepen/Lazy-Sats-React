import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import CollaborationCard from '../components/collaboration-card'
import ArtistCard from '../components/artist-card'
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
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/6bfadd6b-692a-4295-bea0-5d8be8c2e17a?org_if_sml=1"
        />
      </Helmet>
      <Header></Header>
      <div className="home-hero">
        <div className="home-hero1">
          <div className="home-container1">
            <div className="home-blog-post-card">
              <img
                alt="image"
                src="/Lazy Sats/collage%202-1400w.png"
                loading="eager"
                image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
                className="home-image"
              />
              <div className="home-container2">
                <span className="home-text">
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
                <div className="home-container3">
                  <div className="home-container4">
                    <a
                      href="https://discord.gg/EaNcmJky8H"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-link button"
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
      <div className="home-information">
        <div className="home-information1">
          <div className="home-container5">
            <CollaborationCard
              title="Collaborations"
              button="Request Collaboration"
              image_src="/Lazy Sats/bk%20employee%20paper%20bag-1500w.png"
              description="Lazy Sats is allocating Whitelist and Allowlist spots to communities all around the globe. If you are interested in a collaboration with Lazy Sats, head over to our Discord and open a support ticket in the #support channel."
              profile_src="https://images.unsplash.com/photo-1611232658409-0d98127f237f?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIzfHxwb3J0cmFpdCUyMHdvbWFufGVufDB8fHx8MTYyNjQ1MDU4MQ&amp;ixlib=rb-1.2.1&amp;h=1200"
              rootClassName="rootClassName1"
            ></CollaborationCard>
            <ArtistCard
              title="Unleash your inner artist"
              button="Enter Artist HUB"
              image_src="/Lazy Sats/jaredfromsubway-1500w.png"
              description="We enable every member of the community to participate in the collection by giving them the opportunity to create and contribute their own unique traits while earning royalties. Feel free to download our assets and unleash your creativity."
              rootClassName="artist-card-root-class-name1"
            ></ArtistCard>
          </div>
        </div>
      </div>
      <ArtistHUB1 rootClassName="artist-hub1-root-class-name"></ArtistHUB1>
      <div className="home-social-bar">
        <Link to="/lazy-sats" className="home-navlink">
          <svg viewBox="0 0 950.8571428571428 1024" className="home-icon">
            <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
          </svg>
        </Link>
      </div>
    </div>
  )
}

export default Home
