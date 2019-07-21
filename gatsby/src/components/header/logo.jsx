import React from "react"
import styled from "styled-components"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import RelativeContainer from "../utilities/relative-container"

const Logo = styled(Link)`
  grid-column: gutter-left;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

// Not arbitrary padding-left, 10% @ 900px is 88px, smooth transitions yo.
const LogoContainer = styled(RelativeContainer)`
  padding-left: 88px;

  @media screen and (min-width: 900px) {
    padding-left: 10%;
  }
`
// TODO: Get the image to actually display.
export default () => (
  <StaticQuery
    query={graphql`
      query {
        background: file(relativePath: { eq: "stellar_logo_red.jpg" }) {
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    `}
    render={data => (
      <LogoContainer>
        <Logo>
          <Img fixed={data.background.childImageSharp.fluid.originalImg} />
        </Logo>
      </LogoContainer>
    )}
  />
)
