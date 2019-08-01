import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"

const Container = styled.section`
  margin-top: 50px;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
`

const Content = () => (
  <StaticQuery
    // TODO: Get a query to pull pictures and text from markdown files for each employee.
    /*query={graphql`
      query 
    `}*/
    render={data => (
      <Container>
        <StyledH2>About us</StyledH2>
        <p>
          We are a small company based out of Chester Airport. We specialize in
          installing avionics
        </p>
        <p>Meet our staff:</p>
      </Container>
    )}
  />
)

export default Content
