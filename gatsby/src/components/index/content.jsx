import React from "react"
import styled from "styled-components"

import ButtonLink from "../utilities/button-link"

const Container = styled.section`
  text-align: center;
  padding-top: 15%;
`

const Content = () => (
  <Container>
    <h1>
      <span
        style={{ fontSize: "3rem", fontWeight: "400", padding: "0 25% 0 0" }}
      >
        Stellar
      </span>
      <br />
      <span
        style={{ fontSize: "2.5rem", fontWeight: "400", padding: "0 0 0 25%" }}
      >
        Avionics
      </span>
    </h1>

    <h2 style={{ margin: "30% 0", fontWeight: "400" }}>
      Bravely go where many satisfied customers have gone before!
    </h2>
    <ButtonLink to="/projects">See our work &rarr;</ButtonLink>
  </Container>
)

export default Content
