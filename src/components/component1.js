import React from 'react'

import PropTypes from 'prop-types'

import './component1.css'

const Component1 = (props) => {
  return (
    <div className={`component1-container ${props.rootClassName} `}>
      <h1 className="component1-text">{props.heading}</h1>
      <div className="component1-container1">
        <span className="component1-text01">
          <span>
            Lazy Sats is allocating Whitelist and Allowlist spots to communities
            all around the globe. If you are interested in a collaboration with
            Lazy Sats, head over to our Discord and open a support ticket in the
            #support channel.
          </span>
          <br></br>
          <br></br>
          <span>
            A team member or moderator will reach out to you as soon as possible
            to discuss any further details.
          </span>
          <br></br>
        </span>
        <a
          href={props.link_button1}
          target="_blank"
          rel="noreferrer noopener"
          className="component1-link button"
        >
          {props.button1}
        </a>
      </div>
      <span className="component1-text07">
        <span>You can also find us on subber.xyz</span>
        <br></br>
      </span>
      <a
        href={props.link_button}
        target="_blank"
        rel="noreferrer noopener"
        className="component1-link1 button"
      >
        {props.button}
      </a>
    </div>
  )
}

Component1.defaultProps = {
  button1: 'Request Collaboration',
  link_button: 'https://www.subber.xyz/lazysats',
  rootClassName: '',
  heading: 'Collaborations',
  button: 'Lazy Sats on subber.xyz',
  link_button1: 'https://discord.gg/CEmsXHvRr4',
}

Component1.propTypes = {
  button1: PropTypes.string,
  link_button: PropTypes.string,
  rootClassName: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  link_button1: PropTypes.string,
}

export default Component1
