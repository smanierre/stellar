import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavMenu = styled.nav`
  width: 200px;
  height: calc(100vh - 50px);
  background-color: red;
  position: absolute;
  top: 50px;
  left: 100%;
  transition: 0.4s all;
`

export default () => <NavMenu />
