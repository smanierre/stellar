import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import NavMenuIcon from "./nav-menu-icon"
import Nav from "./nav"

const ResponsiveHeader = styled.header`
  ${/*Base styles that will apply regardless of mobile or desktop. Also don't @ me about comments in template literals*/ ""}
  grid-column: gutter-left / -1;
  grid-row: header;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;

  ${/*Mobile only styles*/ ""}
  @media screen and (max-width: 899px) {
    flex-wrap: wrap;

    &:nth-child(2) {
      margin-left: auto;
    }
  }

  ${/*Desktop styles*/ ""}
  @media screen and (min-width: 900px) {
  }
`

const Header = props => {
  // const items = [
  //   <NavItem to="/" key={1}>
  //     LOGO
  //   </NavItem>,
  //   <NavItem to="/" key={2}>
  //     Home
  //   </NavItem>,
  //   <NavItem to="/projects" key={3}>
  //     Projects
  //   </NavItem>,
  //   <NavItem to="/about" key={4}>
  //     About
  //   </NavItem>,
  //   <NavItem to="/contact" key={5}>
  //     Contact
  //   </NavItem>,
  // ]

  return (
    <ResponsiveHeader>
      <Logo to="/" />
      <NavMenuIcon />
      <Nav>{/*items*/}</Nav>
    </ResponsiveHeader>
  )
}

export default Header
