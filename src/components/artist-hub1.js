import React from 'react'
import { Link } from 'react-router-dom'

import PropTypes from 'prop-types'

import './artist-hub1.css'

const ArtistHUB1 = (props) => {
  return (
    <div className={`artist-hub1-hero ${props.rootClassName} `}>
      <div className="artist-hub1-container">
        <div className="artist-hub1-artist-hub-desktop">
          <div className="artist-hub1-artist-hub-info">
            <h1 className="artist-hub1-text">{props.heading}</h1>
            <span className="artist-hub1-text01">
              <span className="">
                Welcome to the Lazy Sats Artist HUB, a haven for unleashing your
                boundless imagination and embracing your inner artist. Here, you
                have the freedom to create distinctive traits for the Lazy Sats
                collection, with each selected trait offering the opportunity to
                earn royalties for its creator.
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="">
                Craft your own traits in accordance with our guidelines, which
                you can find below. Once you&apos;ve perfected your masterpiece,
                simply submit it through the Artist HUB. Remember, there&apos;s
                no limit to the number of traits you can submit—let your
                creativity flow without constraint.
              </span>
            </span>
          </div>
          <div className="artist-hub1-guidelines">
            <h1 className="artist-hub1-text06">{props.heading1}</h1>
            <div className="artist-hub1-touching-border">
              <div className="artist-hub1-container01">
                <img
                  alt={props.image_alt}
                  src={props.image_src}
                  className="artist-hub1-image"
                />
              </div>
              <div className="artist-hub1-container02">
                <h1 className="artist-hub1-text07">{props.heading8}</h1>
                <span className="artist-hub1-text08">
                  <span className="">
                    Traits should never touch the border of the image on any
                    side. Always make sure there is at least one pixel of space
                    between your trait and the border
                  </span>
                  <br className=""></br>
                  <br className=""></br>
                </span>
              </div>
            </div>
            <div className="artist-hub1-missing-border">
              <div className="artist-hub1-container03">
                <img
                  alt={props.image_alt1}
                  src={props.image_src1}
                  className="artist-hub1-image1"
                />
              </div>
              <div className="artist-hub1-container04">
                <h1 className="artist-hub1-text12">{props.heading9}</h1>
                <span className="artist-hub1-text13">
                  <span className="">
                    Every trait should have a black border around
                  </span>
                  <br className=""></br>
                  <br className=""></br>
                </span>
              </div>
            </div>
            <div className="artist-hub1-missing-border1">
              <div className="artist-hub1-container05">
                <img
                  alt={props.image_alt2}
                  src={props.image_src2}
                  className="artist-hub1-image2"
                />
              </div>
              <div className="artist-hub1-container06">
                <h1 className="artist-hub1-text17">{props.heading10}</h1>
                <span className="artist-hub1-text18">
                  <span className="">
                    Traits should always be uploaded in 24 x 24 pixel.
                  </span>
                  <br className=""></br>
                </span>
              </div>
            </div>
          </div>
          <div className="artist-hub1-download">
            <h1 className="artist-hub1-text21">{props.heading2}</h1>
            <span className="artist-hub1-text22">{props.text}</span>
            <a
              href={props.link_button}
              data-download-url='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
              target="_blank"
              rel="noreferrer noopener"
              className="artist-hub1-link button"
            >
              <span className="">
                <span className="">Download</span>
                <br className=""></br>
              </span>
            </a>
          </div>
          <div className="artist-hub1-submit">
            <h1 className="artist-hub1-text26">{props.heading3}</h1>
            <span className="artist-hub1-text27">{props.text1}</span>
            <Link to="/submit" className="artist-hub1-navlink button">
              <span className="">
                <span className="">Submit</span>
                <br className=""></br>
              </span>
            </Link>
          </div>
        </div>
        <div className="artist-hub1-artist-hub-mobile">
          <img
            alt={props.Header_Image_alt1}
            src={props.Header_Image_src1}
            loading="eager"
            image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
            className="artist-hub1-header-image"
          />
          <div className="artist-hub1-artist-hub-info1">
            <h1 className="artist-hub1-text31">{props.heading4}</h1>
            <span className="artist-hub1-text32">
              <span className="">
                Welcome to the Lazy Sats Artist HUB, a haven for unleashing your
                boundless imagination and embracing your inner artist. Here, you
                have the freedom to create distinctive traits for the Lazy Sats
                collection, with each selected trait offering the opportunity to
                earn royalties for its creator.
              </span>
              <br className=""></br>
              <br className=""></br>
              <span className="">
                Craft your own traits in accordance with our guidelines, which
                you can find below. Once you&apos;ve perfected your masterpiece,
                simply submit it through the Artist HUB. Remember, there&apos;s
                no limit to the number of traits you can submit—let your
                creativity flow without constraint.
              </span>
            </span>
          </div>
          <div className="artist-hub1-guidelines1">
            <h1 className="artist-hub1-text37">{props.heading5}</h1>
            <div className="artist-hub1-touching-border1">
              <div className="artist-hub1-container07">
                <img
                  alt={props.image_alt3}
                  src={props.image_src3}
                  className="artist-hub1-image3"
                />
              </div>
              <div className="artist-hub1-container08">
                <h1 className="artist-hub1-text38">{props.heading11}</h1>
                <span className="artist-hub1-text39">
                  <span className="">
                    Traits should never touch the border of the image on any
                    side. Always make sure there is at least one pixel of space
                    between your trait and the border
                  </span>
                  <br className=""></br>
                  <br className=""></br>
                </span>
              </div>
            </div>
            <div className="artist-hub1-missing-border2">
              <div className="artist-hub1-container09">
                <img
                  alt={props.image_alt4}
                  src={props.image_src4}
                  className="artist-hub1-image4"
                />
              </div>
              <div className="artist-hub1-container10">
                <h1 className="artist-hub1-text43">{props.heading12}</h1>
                <span className="artist-hub1-text44">
                  <span className="">
                    Every trait should have a black border around
                  </span>
                  <br className=""></br>
                  <br className=""></br>
                </span>
              </div>
            </div>
            <div className="artist-hub1-missing-border3">
              <div className="artist-hub1-container11">
                <img
                  alt={props.image_alt5}
                  src={props.image_src5}
                  className="artist-hub1-image5"
                />
              </div>
              <div className="artist-hub1-container12">
                <h1 className="artist-hub1-text48">{props.heading13}</h1>
                <span className="artist-hub1-text49">
                  <span className="">
                    Traits should always be uploaded in 24 x 24 pixel.
                  </span>
                  <br className=""></br>
                </span>
              </div>
            </div>
          </div>
          <div className="artist-hub1-download1">
            <h1 className="artist-hub1-text52">{props.heading6}</h1>
            <span className="artist-hub1-text53">{props.text2}</span>
            <a
              href={props.link_button1}
              data-download-url='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
              target="_blank"
              rel="noreferrer noopener"
              className="artist-hub1-link1 button"
            >
              <span className="">
                <span className="">Download</span>
                <br className=""></br>
              </span>
            </a>
          </div>
          <div className="artist-hub1-submit1">
            <h1 className="artist-hub1-text57">{props.heading7}</h1>
            <span className="artist-hub1-text58">{props.text3}</span>
            <Link
              to="/submit"
              data-download-url='https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/ed91f2ff-cc9d-4b39-b25f-f03ec37429bb/c670fb2c-c640-4378-b94c-f00b95a2fad9?org_if_sml=1"'
              className="artist-hub1-navlink1 button"
            >
              <span className="">
                <span className="">Submit</span>
                <br className=""></br>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

ArtistHUB1.defaultProps = {
  heading13: '24 x 24 Pixels',
  heading10: '24 x 24 Pixels',
  heading7: 'Submit',
  text: 'Download the Lazy Sats demo canvas below and start creating',
  heading5: 'Guidelines',
  text2: 'Download the Lazy Sats demo canvas below and start creating',
  image_src4: '/Lazy Sats/wrong_2-300w.png',
  Header_Image_alt: 'image',
  image_alt5: 'image',
  text1: 'Click the button below to submit your trait',
  image_alt1: 'image',
  heading: 'Artist HUB',
  heading1: 'Guidelines',
  Header_Image_src1: '/Lazy Sats/collage%202-1400w.png',
  heading2: 'Download',
  heading3: 'Submit',
  link_button: '/Lazy Sats/demo_canvas-1400w.png',
  image_src1: '/Lazy Sats/wrong_2-300w.png',
  rootClassName: '',
  image_alt: 'image',
  heading6: 'Download',
  Header_Image_alt1: 'image',
  image_src2: '/Lazy Sats/24x24-300w.png',
  Header_Image_src: '5267a421-a836-47f8-b325-29ed65b8a997',
  image_src: '/Lazy Sats/wrong_1-300w.png',
  heading9: 'Missing black border',
  image_alt2: 'image',
  text3: 'Click the button below to submit your trait',
  heading8: 'Touching the border',
  image_alt4: 'image',
  heading12: 'Missing black border',
  link_button1: '/Lazy Sats/demo_canvas-1400w.png',
  image_alt3: 'image',
  image_src3: '/Lazy Sats/wrong_1-300w.png',
  image_src5: '/Lazy Sats/24x24-300w.png',
  heading11: 'Touching the border',
  heading4: 'Lazy Sats Artist HUB',
}

ArtistHUB1.propTypes = {
  heading13: PropTypes.string,
  heading10: PropTypes.string,
  heading7: PropTypes.string,
  text: PropTypes.string,
  heading5: PropTypes.string,
  text2: PropTypes.string,
  image_src4: PropTypes.string,
  Header_Image_alt: PropTypes.string,
  image_alt5: PropTypes.string,
  text1: PropTypes.string,
  image_alt1: PropTypes.string,
  heading: PropTypes.string,
  heading1: PropTypes.string,
  Header_Image_src1: PropTypes.string,
  heading2: PropTypes.string,
  heading3: PropTypes.string,
  link_button: PropTypes.string,
  image_src1: PropTypes.string,
  rootClassName: PropTypes.string,
  image_alt: PropTypes.string,
  heading6: PropTypes.string,
  Header_Image_alt1: PropTypes.string,
  image_src2: PropTypes.string,
  Header_Image_src: PropTypes.string,
  image_src: PropTypes.string,
  heading9: PropTypes.string,
  image_alt2: PropTypes.string,
  text3: PropTypes.string,
  heading8: PropTypes.string,
  image_alt4: PropTypes.string,
  heading12: PropTypes.string,
  link_button1: PropTypes.string,
  image_alt3: PropTypes.string,
  image_src3: PropTypes.string,
  image_src5: PropTypes.string,
  heading11: PropTypes.string,
  heading4: PropTypes.string,
}

export default ArtistHUB1
