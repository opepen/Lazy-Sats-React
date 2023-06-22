import React from 'react'

import Script from 'dangerous-html/react'
import PropTypes from 'prop-types'

import './lazy-playlist.css'

const LazyPlaylist = (props) => {
  return (
    <div className={`lazy-playlist-container ${props.rootClassName} `}>
      <div className="lazy-playlist-container1">
        <div className="lazy-playlist-code-embed">
          <Script
            html={`<iframe style="border-radius:10px" src="https://open.spotify.com/embed/playlist/0FjI0HzVn7O0X3YqLYxZSA?utm_source=generator&theme=0" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
            className=""
          ></Script>
        </div>
      </div>
    </div>
  )
}

LazyPlaylist.defaultProps = {
  rootClassName: '',
}

LazyPlaylist.propTypes = {
  rootClassName: PropTypes.string,
}

export default LazyPlaylist
