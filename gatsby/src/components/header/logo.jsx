import React from "react"
import styled from "styled-components"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from "prop-types"

import RelativeContainer from "../utilities/relative-container"

const Logo = styled(Link)`
  grid-column: gutter-left;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LogoContainer = styled(RelativeContainer)`
  /* Not arbitrary padding-left, 10% @ 900px is 88px, smooth transitions yo. */
  margin-left: 50px;

  /* Desktop styles */
  @media screen and (min-width: 900px) {
    margin-left: 5%;
  }
`

const StyledImg = styled(Img)`
  filter: drop-shadow(3px 3px 6px #fff);
`

const ExportedLogo = ({ to }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "stellar_logo_red.png" }) {
          childImageSharp {
            fixed(height: 125) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <LogoContainer>
        <Logo to={to}>
          <StyledImg fixed={data.logo.childImageSharp.fixed} />
        </Logo>
      </LogoContainer>
    )}
  />
)

export default ExportedLogo

ExportedLogo.defaultProps = {
  to: "/",
}

ExportedLogo.propTypes = {
  to: PropTypes.string,
}
