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
  transition: all 0.5s;

  @media screen and (min-width: 900px) {
    border-bottom: none;
    &:hover {
      /* Fix this so it only happens on the main page */
      background-color: rgba(255, 255, 255, 0.6);
    }
  }
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
