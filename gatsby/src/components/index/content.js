import React from "react"
import styled from "styled-components"

const Container = styled.section`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  height: 100%;
  padding-top: 5%;
`

const HeadingContainer = styled.div`
  font-size: 17px;
  margin-left: 5%;
  color: white;

  & h1 {
    font-size: inherit;
    font-weight: 400;
  }

  & h1:not(:first-child) {
    margin-top: -4%;
    margin-left: 20%;
    display: inline-block;
  }
`

const AboutContainer = styled.div`
  padding-left: 3%;
`

const Content = () => (
  <Container>
    <HeadingContainer>
      <h1>Stellar</h1>
      <h1>Avionics</h1>
    </HeadingContainer>
    <AboutContainer>
      <p>
        Here at stellar avionics, we are all about quality work, no matter how
        small.
      </p>
    </AboutContainer>
  </Container>
)

export default Content
