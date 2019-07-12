import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RelativeContainer from "../utilities/RelativeContainer"
import MobileNav from "./mobile-nav"

const Logo = styled(Link)`
  grid-column: gutter-left;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const Nav = styled.nav``
const MobileHeader = () => (
  <>
    <RelativeContainer>
      <Logo>LOGO</Logo>
    </RelativeContainer>
    <MobileNav />
  </>
)

export default MobileHeader
