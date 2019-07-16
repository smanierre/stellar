import React from "react"
import styled from "styled-components"

import MobileNavIcon from "./mobile-nav-icon"
import NavMenu from "./mobile-menu"
import Logo, { Logogo, LogoContainer } from "./mobile-logo"

const Header = styled.header`
  grid-column: gutter-left / -1;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`

const FlexContainer = styled.div`
  display: flex;
  flex-basis: 100%;
  height: 100%;
  width: 100%;
`

const MenuToggle = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;

  &:checked + nav {
    background-color: blue;
    left: calc(100% - 200px);
  }

  &:checked + div > label > span {
    transform: rotate(45deg);
  }
`

const MobileHeader = () => (
  <Header>
    <FlexContainer>
      <Logo />
      <MobileNavIcon />
    </FlexContainer>
    <MenuToggle type="checkbox" id="menu-toggle" />
    <NavMenu />
  </Header>
)

export default MobileHeader
