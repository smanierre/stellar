import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: absolute;
  top: 75px;
  left: 100%;
  height: 100vh;
  width: 200px;
  background-color: black;
  transition: 1s all;
`

const Nav = ({ children }) => <StyledNav>{children}</StyledNav>

export default Nav
