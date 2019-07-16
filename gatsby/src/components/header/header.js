import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Navbar, NavItem } from "./desktop/navbar"
import MobileHeader from "./mobile/mobile-header"

//Because gatsby cant generate with a reference to window
const windowGlobal = typeof window !== "undefined" && window

const StyledHeader = styled.header`
  grid-column: gutter-left / -1;
  grid-row: header;
  position: fixed;
  top: 0;
  left: 0;
  height: ${() => (windowGlobal.innerWidth < 900 ? "50px" : "75px")};
`

const Header = props => {
  const items = [
    <NavItem to="/" key={1}>
      LOGO
    </NavItem>,
    <NavItem to="/" key={2}>
      Home
    </NavItem>,
    <NavItem to="/projects" key={3}>
      Projects
    </NavItem>,
    <NavItem to="/about" key={4}>
      About
    </NavItem>,
    <NavItem to="/contact" key={5}>
      Contact
    </NavItem>,
  ]

  return windowGlobal.innerWidth > 900 ? (
    //TODO: Refactor this to just have <DesktopHeader /> and move components into the desktop folder
    <StyledHeader>
      <Navbar>{items}</Navbar>
    </StyledHeader>
  ) : (
    <MobileHeader />
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stellar Avionics`,
}

export default Header
