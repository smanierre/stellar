import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Logo from "./logo"
import NavMenuIcon from "./nav-menu-icon"
import Nav from "./nav"
import NavItem from "./nav-item"

// Base styles that will apply regardless of mobile or desktop. Also don't @ me about comments in template literals.
const ResponsiveHeader = styled.header`
  grid-column: gutter-left / -1;
  grid-row: header;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 75px;
  /* To hide any items behind it when scrolling on any page but the landing page.*/
  z-index: 1;
  ${({ uri }) =>
    uri === "/"
      ? "background-color: rgba(255, 255, 255, 0.4);"
      : `background-color: rgba(234, 231, 220, 1);`}

  /* Mobile styles */
  @media screen and (max-width: 899px) {
    flex-wrap: wrap;

    &:nth-child(2) {
      margin-left: auto;
    }
  }

  /* Desktop styles */
  @media screen and (min-width: 900px) {
  }
`

const Header = props => {
  const items = [
    { text: "Home", to: "/", key: "home" },
    { text: "Projects", to: "/projects", key: "projects" },
    { text: "About", to: "/about", key: "about" },
    { text: "Contact", to: "/contact", key: "contact" },
  ]
  const { uri } = props
  return (
    <>
      <ResponsiveHeader uri={uri}>
        <Logo to="/" />
        <NavMenuIcon />
        <Nav>
          {items.map(item => (
            <NavItem to={item.to} key={item.key} uri={uri}>
              {item.text}
            </NavItem>
          ))}
        </Nav>
      </ResponsiveHeader>
    </>
  )
}

export default Header

Header.defaultProps = {
  uri: "",
}

Header.propTypes = {
  uri: PropTypes.string,
}
