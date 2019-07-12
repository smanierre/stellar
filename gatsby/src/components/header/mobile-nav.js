import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
  height: 100%;
  position: relative;
  grid-column: gutter-right;
`

const DropdownIcon = styled.span`
  display: inline-block;
  height: 3px;
  width: 30px;
  background-color: black;
  position: absolute;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: black;
    position: absolute;
    top: 50%;
    left: 50%;
  }

  &::before {
    transform: translate(-50%, calc(-50% + 6px));
  }

  &::after {
    transform: translate(-50%, calc(-50% - 6px));
  }
`

const MobileNav = ({ children }) => (
  <StyledNav>
    <DropdownIcon>&nbsp;</DropdownIcon>
  </StyledNav>
)

export default MobileNav
