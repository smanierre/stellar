import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: absolute;
  top: 75px;
  left: 100%;
  height: 100vh;
  width: 60%;
  background-color: #e98074;
  transition: 0.3s all ease-out;
  z-index: 100;
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  font-size: 1.5rem;
`

const Nav = ({ children }) => <StyledNav>{children}</StyledNav>

export default Nav
