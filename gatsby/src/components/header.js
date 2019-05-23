import PropTypes from "prop-types"
import React from "react"

import { Navbar, Logo, NavItem } from "./navbar"
const Header = props => {
  return (
    <header>
      <Navbar>
        <NavItem left>Home</NavItem>
        <NavItem left>Projects</NavItem>
        <Logo logo>Test</Logo>
        <NavItem right>About</NavItem>
        <NavItem right>Contact</NavItem>
      </Navbar>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stellar Avionics`,
}

export default Header
