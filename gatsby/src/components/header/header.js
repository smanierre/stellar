import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Navbar, NavItem } from "./navbar"
import MobileNav from "./mobile-nav"

const StyledHeader = styled.header`
  grid-column: gutter-left / -1;
  grid-row: header;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
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
  console.log(window.innerWidth)
  return (
    <StyledHeader>
      {window.innerWidth > 900 ? (
        <Navbar>{items}</Navbar>
      ) : (
        <MobileNav>{items}</MobileNav>
      )}
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stellar Avionics`,
}

export default Header
