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

  ${"" /*hide the menu icon because the desktop will just have the items listed out */}
  @media screen and (min-width: 900px) {
    display: none;
  }

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
  padding-right: 88px;
  display: inline-block;
  position: relative;
`
//Input for the checkbox hack. Styles for the open menu icon and menu will have to go in here.
const MenuToggle = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;

  &:checked + nav {
    left: calc(100% - 200px);
  }
`

const MobileNavIcon = ({ children }) => (
  <>
    <NavIconContainer for="menu-toggle">
      <DropdownIcon>&nbsp;</DropdownIcon>
    </NavIconContainer>
    <MenuToggle type="checkbox" id="menu-toggle" />
  </>
)

export default MobileNavIcon
