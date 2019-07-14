import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import RelativeContainer from "../../utilities/RelativeContainer"
import MobileNavIcon from "./mobile-nav-icon"

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
`
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
  </Header>
)

export default MobileHeader
