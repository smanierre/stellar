import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  margin-top: 50px;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
`

const Map = styled.iframe`
  //TODO Add styles to make map look better
  display: inline-block;
  width: 69%;
  margin-left: 10%;
  height: 60vh;
`

const Content = () => (
  <StyledSection>
    <StyledH2>How to reach us:</StyledH2>
    <p
      style={{
        display: "inline-block",
        marginBottom: "auto",
        verticalAlign: "top",
      }}
    >
      Call us at:
      <br />
      (860) 322-4244
      <br />
      <br />
      Email us at:
      <br />
      <a href="mailto:stellaravionics@gmail.com" rel="noreferrer noopener" target="_blank">
        stellaravionics@gmail.com
      </a>
      <br />
      <br />
      Or visit us at:
      <br />
      59 Winthrop Rd
      <br />
      Chester, CT 06412
    </p>
    <Map
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.425857637693!2d-72.50887508466101!3d41.38655717926423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e63a97eff1ab6f%3A0x574f21ab15da046d!2sStellar+Avionics+Services+LLC!5e0!3m2!1sen!2sus!4v1564791529521!5m2!1sen!2sus"
      width="100%"
      height="300"
      frameBorder="0"
      style={{ border: "0" }}
      allowFullScreen
      title="stellarMap"
    />
  </StyledSection>
)

export default Content
