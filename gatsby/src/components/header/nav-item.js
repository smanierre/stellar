import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const StyledItem = styled(Link)`
  display: inline-block;
  width: 100%;
  height: 75px;
  line-height: 75px;
  text-align: center;
  border-bottom: 3px solid rgba(0, 0, 0, 0.2);
  text-decoration: none;
  color: black;
`
const NavItem = props => <StyledItem to={props.to}>{props.children}</StyledItem>

export default NavItem
