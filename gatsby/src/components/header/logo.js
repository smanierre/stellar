import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
  ${"" /*Not arbitrary, 10% @ 900px is 88px, smooth transitions yo.*/}
  padding-left: 88px;

  @media screen and (min-width: 900px) {
    padding-left: 10%;
  }
`

export default () => (
  <LogoContainer>
    <Logo>LOGO</Logo>
  </LogoContainer>
)
