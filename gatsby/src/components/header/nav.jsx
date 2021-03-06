import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledNav = styled.nav`
  position: absolute;
  right: -100vw;
  height: 100vh;
  width: 100vw;
  background-color: rgba(201, 199, 196, 1);
  padding-top: 33%;
  z-index: 10;
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 24px;
  transition: all 0.6s;

  @media screen and (min-width: 900px) {
    position: relative;
    height: 75px;
    width: 33%;
    right: 0;
    padding: 0;
    background-color: transparent;
    flex-direction: row;
  }
`

const Nav = ({ children }) => <StyledNav>{children}</StyledNav>

export default Nav

Nav.propTypes = {
  children: PropTypes.instanceOf(Array).isRequired,
}
