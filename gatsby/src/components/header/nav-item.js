import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledItem = styled(Link)`
  display: inline-block;
  width: 66%;
  height: 75px;
  line-height: 75px;
  text-align: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: #e85a4f;
`
//TODO: Get this onClick Working
const NavItem = props => (
  <StyledItem
    to={props.to}
    onClick={() => {
      document.querySelector("#menu-toggle").checked = true
    }}
  >
    {props.children}
  </StyledItem>
)

export default NavItem
