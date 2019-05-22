import PropTypes from "prop-types"
import React from "react"

import styled from "styled-components"

const Wrapper = styled.nav`
  position: absolute;
  height: 75px;
  width: 100%;
  background-color: lightcoral;
`

const LeftItems = styled.ul`
  width: 50%;
  float: left;
  display: flex;
  text-align: center;
`

const RightItems = styled.ul`
  width: 50%;
  float: left;
  display: flex;
  text-align: center;
`

const NavItem = styled.li``

const Header = props => {
  let left, right
  if (props.children && props.children.length) {
    left = props.children.filter(child => child.props.hasOwnProperty("left"))
    right = props.children.filter(child => child.props.hasOwnProperty("right"))
  }

  return (
    <header>
      <Wrapper />
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Stellar Avionics`,
}

export default Header
