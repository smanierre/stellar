import React, { Component } from "react"
import { createPortal } from "react-dom"
import PropTypes from "prop-types"
import styled from "styled-components"

import ArrowIcon from "./lightbox-arrow"

const ScreenCover = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.9);
`
const CloseIcon = styled.svg`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`

class Slideshow extends Component {
    constructor(props) {
      super(props)
      this.state = {
        photoIndex: props.photoIndex,
      }
    }

  static propTypes = {
    closeToggle: PropTypes.func.isRequired,
  }

  render() {
    const { closeToggle } = this.props
    return createPortal(
      <ScreenCover>
        <CloseIcon
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="25"
          height="25"
          viewBox="0 0 50 50"
          style={{ fill: "rgba(241, 241, 241, .8" }}
          onClick={closeToggle}
        >
          {" "}
          <path d="M31.202,25l13.63-20.445c0.204-0.307,0.224-0.701,0.05-1.026S44.369,3,44,3h-7.34c-0.327,0-0.634,0.16-0.821,0.429L25,19 L14.16,3.429C13.973,3.16,13.667,3,13.34,3H6C5.631,3,5.292,3.203,5.118,3.528s-0.154,0.72,0.05,1.026L18.798,25L5.168,45.445 c-0.204,0.307-0.224,0.701-0.05,1.026S5.631,47,6,47h7.34c0.327,0,0.634-0.16,0.821-0.429L25,31l10.84,15.571 C36.027,46.84,36.333,47,36.66,47H44c0.369,0,0.708-0.203,0.882-0.528s0.154-0.72-0.05-1.026L31.202,25z" />
        </CloseIcon>
        // TODO: Get these to actually display.
        <ArrowIcon left />
        <ArrowIcon />
      </ScreenCover>,
      document.querySelector("body")
    )
  }
}

export default Slideshow
