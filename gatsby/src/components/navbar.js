import React from "react"
import styled from "styled-components"

const Wrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  height: 7vh;
  width: 100%;
  background-color: lightcoral;
  display: flex;
  justify-content: center;
`

export const Logo = styled.div`
  text-align: center;
  color: black;
  padding: 25px;
  border-right: 1px solid black;
  border-left: 1px solid black;
`

export const NavItem = styled.a`
  display: inline-block;
  padding: 0 25px
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
