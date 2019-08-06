import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const StyledButton = styled(Link)`
  display: inline-block;
  padding: 10px 15px;
  border 1px solid #e85a4f;
  text-decoration: none;
  color: rgb(234, 231, 220);
  background-color: #e85a4f;

  &:hover, &:active {
    background-color: #e85a4f;
    color: white;
  }
`
const ButtonLink = ({ to, children, className }) => (
  <StyledButton to={to} className={className}>
    {children}
  </StyledButton>
)

export default ButtonLink

ButtonLink.defaultProps = {
  children: "",
  className: "",
}

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.string,
  className: PropTypes.string,
}
