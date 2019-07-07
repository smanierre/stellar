import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Navbar, NavItem } from "./navbar"

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
  return (
    <StyledHeader>
      <Navbar>
        <NavItem to="/">LOGO</NavItem>
        <NavItem to="/">
          Home
        </NavItem>
        <NavItem to="/projects">Projects</NavItem>
        <NavItem to="/about">About</NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </Navbar>
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
