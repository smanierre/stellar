import React from "react"
import styled from "styled-components"

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 7vh;
  width: 100%;
  background-color: lightblue;
  display: flex;
  justify-content: center;

  & *:not(:last-child)::after {
    content: "";
    display: inline-block;
    height: 75%;
    border-right: 1px solid black;
  }

  & *:hover {
    background-color: black;
    color: white;
  }
`

export const Logo = styled.div`
  height: 100%;
  text-align: center;
  color: black;
  padding: 0 25px;
`

export const NavItem = styled.a`
  display: inline-block;
  height: 100%;
  padding: 0 25px;
  text-align: center;
`

export const Navbar = props => {
  let leftChildren = []
  let rightChildren = []
  let logo

  if (props.children && props.children.length) {
    props.children.forEach(child => {
      if (child.props.left) leftChildren.push(child)
      if (child.props.right) rightChildren.push(child)
      if (child.props.logo) logo = child
    })
  }

  return (
    <Wrapper>
      {leftChildren}
      {logo}
      {rightChildren}
    </Wrapper>
  )
}
