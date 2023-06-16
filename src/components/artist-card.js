import React from 'react'

import PropTypes from 'prop-types'

import './artist-card.css'

const ArtistCard = (props) => {
  return (
    <div className={`artist-card-blog-post-card ${props.rootClassName} `}>
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="artist-card-image"
      />
      <div className="artist-card-container">
        <h1 className="artist-card-text">{props.title}</h1>
        <span className="artist-card-text1">{props.description}</span>
        <a href="#artisthub" className="artist-card-link button">
          {props.button}
        </a>
      </div>
    </div>
  )
}

ArtistCard.defaultProps = {
  rootClassName: '',
  button: 'Button',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  image_alt: 'image',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  title: 'Lorem ipsum dolor sit amet',
}

ArtistCard.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
}

export default ArtistCard
