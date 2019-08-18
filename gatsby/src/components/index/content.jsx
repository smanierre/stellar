import React from "react"
import styled from "styled-components"

import ButtonLink from "../utilities/button-link"

const Container = styled.section`
  text-align: center;
  padding-top: 15%;
  position: relative;
  background-size: cover;
  background-image: ${({ bg }) => `url(${bg})`};
`

const StellarSpan = styled.span`
  font-size: 3rem;
  font-weight: 400;
  padding: 0 25px 0 calc(50px + 10%);
  position: absolute;
  top: 9%;
  left: -50px;
  background-color: rgba(255, 255, 255, 0.4);
  clip-path: polygon(0 0, calc(100% - 25px) 0, 100% 100%, 0 100%);
`
const HeroText = styled.h2`
  margin: 30% 0 30% 0;
  padding: 25px 0;
  font-weight: 400;
  display: inline-block;
  width: 100vw;
  background-color: rgba(255, 255, 255, 0.4);
`

const AvionicsSpan = styled.span`
  font-size: 2.5rem;
  font-weight: 400;
  position: absolute;
  top: calc(15% + 35px);
  right: -50px;
  background-color: rgba(255, 255, 255, 0.4);
  clip-path: polygon(25px 0, 100% 0, 100% 100%, 0 100%);
  padding: 0 100px 0 25px;
`

const Content = () => (
  <Container>
    <h1>
      <StellarSpan>Stellar</StellarSpan>
      <br />
      <AvionicsSpan>Avionics</AvionicsSpan>
    </h1>
    <HeroText>
      Bravely go where many satisfied customers have gone before!
    </HeroText>
    <ButtonLink to="/projects">See our work &rarr;</ButtonLink>
  </Container>
)

export default Content
