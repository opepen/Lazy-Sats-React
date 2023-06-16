import React from 'react'

import PropTypes from 'prop-types'

import './collaboration-card.css'

const CollaborationCard = (props) => {
  return (
    <div
      className={`collaboration-card-blog-post-card ${props.rootClassName} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className="collaboration-card-image"
      />
      <div className="collaboration-card-container">
        <h1 className="collaboration-card-text">{props.title}</h1>
        <span className="collaboration-card-text1">{props.description}</span>
        <a
          href="https://discord.gg/EaNcmJky8H"
          target="_blank"
          rel="noreferrer noopener"
          className="collaboration-card-link button"
        >
          {props.button}
        </a>
      </div>
    </div>
  )
}

CollaborationCard.defaultProps = {
  image_alt: 'image',
  label: 'ENTERPRISE',
  rootClassName: '',
  when: '3 days ago',
  image_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&w=1000',
  title: 'Lorem ipsum dolor sit amet',
  author: 'Jane Doe',
  button: 'Button',
  profile_alt: 'profile',
  profile_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
}

CollaborationCard.propTypes = {
  image_alt: PropTypes.string,
  label: PropTypes.string,
  rootClassName: PropTypes.string,
  when: PropTypes.string,
  image_src: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  button: PropTypes.string,
  profile_alt: PropTypes.string,
  profile_src: PropTypes.string,
  description: PropTypes.string,
}

export default CollaborationCard
