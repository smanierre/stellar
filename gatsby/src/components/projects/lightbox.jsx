import React, { Component } from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import Lightbox from "react-image-lightbox"

const LightboxContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  border: 3px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  padding: 5px;
  margin-bottom: 10%;

  & * {
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`

export default class lightbox extends Component {
  static propTypes = {
    images: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      photoIndex: 0,
      showLightbox: false,
    }
  }

  render() {
    const { images } = this.props
    const { photoIndex, showLightbox } = this.state
    return (
      <>
        <LightboxContainer>
          {images.map(image => (
            // For some reason, the <Img /> tag can't have an onClick handler...
            <div
              onClick={() => this.setState({ showLightbox: true })}
              key={image.asset.fluid.src}
            >
              <Img fluid={{ ...image.asset.fluid, aspectRatio: 1 }} />
            </div>
          ))}
        </LightboxContainer>
        {showLightbox && null}
      </>
    )
  }
}
