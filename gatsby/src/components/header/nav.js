import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: absolute;
  left: -100vw;
  height: 100vh;
  width: 100vw;
  background-color: #d8c3a5;
  padding-top: 33%;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  transition: all 0.6s; cubic-bezier(0.75, 0.23, 0.75, 0.23);
`

const Nav = ({ children }) => <StyledNav>{children}</StyledNav>

export default Nav
