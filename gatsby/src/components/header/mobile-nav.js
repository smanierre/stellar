import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledNav = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: relative;

  & a:first-child {
    grid-column: gutter-left;
    padding: 5% 5%;
    margin-right: auto;
    flex-grow: 1;
  }
`
const Spacer = styled.div`
  flex-grow: 2;
`
const DropdownContainer = styled.div`
  display: inline-block;
  background-color: white;
  height: 100%;
  grid-column: gutter-right
  position: relative;
  flex-grow: 1;
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
    transform: translateY(-3px);
    position: absolute;
    top: 50%;
    left: 50%;
  }
`

const MobileNav = ({ children }) => (
  <StyledNav>
    <Link>Hello</Link>
    <Spacer />
    <DropdownContainer>
      <DropdownIcon>&nbsp;</DropdownIcon>
    </DropdownContainer>
  </StyledNav>
)

export default MobileNav
