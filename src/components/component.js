import React from 'react'

import PropTypes from 'prop-types'

import './component.css'

const AppComponent = (props) => {
  return (
    <div className="component-container">
      <img
        alt={props.image_alt}
        src={props.image_src}
        className="component-image"
      />
    </div>
  )
}

AppComponent.defaultProps = {
  image_alt: 'image',
  image_src: '/Lazy Sats/collage%202-200h.png',
}

AppComponent.propTypes = {
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default AppComponent
