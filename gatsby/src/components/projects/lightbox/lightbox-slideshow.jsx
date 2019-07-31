import React, { Component } from "react"
import { createPortal } from "react-dom"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

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
const StyledImg = styled(Img)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
`

class Slideshow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      photoIndex: props.photoIndex,
      previous:
        (props.images.length + props.photoIndex - 1) % props.images.length,
      next: (props.photoIndex + 1) % props.images.length,
    }
  }

  static propTypes = {
    closeToggle: PropTypes.func.isRequired,
  }

  prevImage = () => {
    const previous =
      (this.props.images.length + this.state.photoIndex - 2) %
      this.props.images.length
    const next = this.state.photoIndex
    const photoIndex = this.state.previous
    this.setState({ previous, next, photoIndex })
  }

  nextImage = () => {
    const previous = this.state.photoIndex
    const next = (this.state.photoIndex + 2) % this.props.images.length
    const photoIndex = this.state.next
    this.setState({ previous, next, photoIndex })
  }

  handleKeyPress = ({ key }) => {
    if (key === "ArrowRight") {
      this.nextImage()
    } else if (key === "ArrowLeft") {
      this.prevImage()
    } else if (key === "Escape") {
      this.props.closeToggle()
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  render() {
    const { closeToggle, images } = this.props
    const { photoIndex } = this.state
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
        <ArrowIcon left onClick={this.prevImage} />
        <ArrowIcon onClick={this.nextImage} />
        <StyledImg fluid={images[photoIndex].asset.fluid} />
      </ScreenCover>,
      document.querySelector("body")
    )
  }
}

export default Slideshow
