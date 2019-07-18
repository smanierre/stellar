import React from "react"
import styled from "styled-components"

import Logo from "./logo"
import NavMenuIcon from "./nav-menu-icon"
import Nav from "./nav"
import ScreenCover from "../utilities/screen-cover"
import NavItem from "./nav-item"

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
  const items = [
    { text: "Home", to: "/" },
    { text: "Projects", to: "/projects" },
    { text: "About", to: "/about" },
    { text: "Contact", to: "/contact" },
  ]

  return (
    <>
      <ResponsiveHeader>
        <Logo to="/" />
        <NavMenuIcon />
        <Nav>
          {items.map((item, index) => (
            <NavItem to={item.to} key={index}>
              {item.text}
            </NavItem>
          ))}
        </Nav>
        <ScreenCover />
      </ResponsiveHeader>
    </>
  )
}

export default Header
