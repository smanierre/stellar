import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

const RelativeContainer = styled.div`
  display: inline-block;
  position: relative;
`

const RelContainer = ({ children, className }) => (
  <RelativeContainer className={className}>{children}</RelativeContainer>
)

export default RelContainer

RelContainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

RelContainer.defaultProps = {
  className: "",
}
