import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
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

const NavItem = ({ to, children }) => (
  <StyledItem
    to={to}
    onClick={() => {
      document.querySelector("#menu-toggle").checked = false
    }}
  >
    {children}
  </StyledItem>
)

export default NavItem

NavItem.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
}
