import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import RelativeContainer from "../../utilities/RelativeContainer"

const Logo = styled(Link)`
  grid-column: gutter-left;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const LogoContainer = styled(RelativeContainer)`
  padding-right: 15%;
`

export default () => (
  <LogoContainer>
    <Logo>LOGO</Logo>
  </LogoContainer>
)
