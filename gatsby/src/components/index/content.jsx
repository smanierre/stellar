import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Container = styled.section`
  text-align: center;
`

const StyledSpan = styled.span`
  font-size: ${({ styles }) => styles.fontSize};
  font-weight: ${({ styles }) => styles.fontWeight};
  padding: ${({ styles }) => styles.padding};
`

const Content = () => (
  <Container>
    <h1>
      <StyledSpan
        styles={{ fontSize: "3rem", fontWeight: "400", padding: "0 25% 0 0" }}
      >
        Stellar
      </StyledSpan>
      <br />
      <StyledSpan
        styles={{ fontSize: "2.5rem", fontWeight: "400", padding: "0 0 0 25%" }}
      >
        Avionics
      </StyledSpan>
    </h1>

    <p>We offer quality avionic installs at competetive prices.</p>
    <Link to="/projects">Learn More &rarr;</Link>
  </Container>
)

export default Content
