import React from "react"
import styled from "styled-components"

const DropdownIcon = styled.span`
  display: inline-block;
  height: 3px;
  width: 30px;
  background-color: #e85a4f;
  position: absolute;
  border-radius: 3px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-right: 5px;

  &::before,
  &::after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 3px;
    background-color: #e85a4f;
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 3px;
  }

  &::before {
    transform: translate(-50%, calc(-50% + 6px));
  }

  &::after {
    transform: translate(-50%, calc(-50% - 6px));
  }
`

const NavIconContainer = styled.label`
  margin-left: auto;
  padding-left: 15%;
  display: inline-block;
  position: relative;
`

const MobileNavIcon = ({ children }) => (
  <NavIconContainer for="menu-toggle">
    <DropdownIcon>&nbsp;</DropdownIcon>
  </NavIconContainer>
)

export default MobileNavIcon
