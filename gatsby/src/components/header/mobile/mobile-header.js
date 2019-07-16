import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RelativeContainer from "../../utilities/RelativeContainer"
import MobileNavIcon from "./mobile-nav-icon"
import NavMenu from "./mobile-menu"

const Logo = styled(Link)`
  grid-column: gutter-left;
  display: inline-block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const Header = styled.header`
  grid-column: gutter-left / -1;
  display: flex;
  flex-direction: reverse;
` //TODO: Flexbox container for items that takes up whole first row and flex reverse to get nav menu on right side

const LogoContainer = styled(RelativeContainer)`
  padding-left: 15%;
`

const NavContainer = styled.label`
  margin-left: auto;
  padding-right: 15%;
  display: inline-block;
  position: relative;
`

const MenuToggle = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;

  &:checked + nav {
    background-color: blue;
  }
`

const MobileHeader = () => (
  <Header>
    <LogoContainer>
      <Logo>LOGO</Logo>
    </LogoContainer>
    <NavContainer for="menu-toggle">
      <MobileNavIcon />
    </NavContainer>
    <MenuToggle type="checkbox" id="menu-toggle" />
    <NavMenu />
  </Header>
)

export default MobileHeader
