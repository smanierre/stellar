import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const color = "#333"

const Wrapper = styled.nav`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 3% 7% 0 10%;

  & a:first-child {
    margin-right: auto;
  }

  & a:first-child:hover {
    transform: scale(1.1);
  }
`
const ItemWrapper = styled(Link)`
  display: inline-block;
  vertical-align: middle;
  transition: all 0.3s;
  margin: auto 0;

  &:not(:first-child):hover {
    cursor: pointer;
    border-bottom: 1px solid ${color};
    transform: scale(1.03);
  }

  &:not(:first-child):hover span {
    transform: translateY(-3px);
  }

  &:not(:first-child):hover span::after {
    font-size: inherit;
  }

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`

export const NavItem = props => (
  <ItemWrapper to={props.to}>
    <ItemText>{props.children}</ItemText>
  </ItemWrapper>
)

const ItemText = styled.span`
  display: inline-block;
  padding: 0 25px;
  margin: auto 0;
  text-align: center;
  text-decoration: none;
  color: ${color};
  transition: all 0.3s;

  &::after {
    content: " \\2192";
    font-size: 0;
    transition: 0.3s all;
  }
`

export const Navbar = ({ children }) => <Wrapper>{children}</Wrapper>
