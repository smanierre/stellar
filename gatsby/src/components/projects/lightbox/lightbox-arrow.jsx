import React from "react"
import styled from "styled-components"
import Proptypes from "prop-types"

const ArrowIcon = styled.svg`
  position: absolute;
  top: 50%;
  cursor: pointer;
  ${props =>
    props.left
      ? `left: 25px;
        transform: translateY(-50%);`
      : `right: 25px
        transform: rotate(180deg) translateY(50%)`}
`

const Arrow = ({ left, onClick }) => (
  <ArrowIcon
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="25"
    height="25"
    viewBox="0 0 40 40"
    style={{ fill: "transparent" }}
    left={left}
    onClick={onClick}
  >
    <path
      fill="rgba(241, 241, 241, 0.9)"
      d="M20,2.02c9.925,0,18,8.075,18,18s-8.075,18-18,18s-18-8.075-18-18S10.075,2.02,20,2.02 M20,1.02 c-10.493,0-19,8.507-19,19s8.507,19,19,19s19-8.507,19-19S30.493,1.02,20,1.02L20,1.02z"
    />
    <g>
      <path
        fill="rgba(241, 241, 241, 0.9)"
        d="M9.729 20.023L15.5 14.339 15.5 18.5 29.5 18.5 29.5 21.5 15.5 21.5 15.5 25.81z"
      />
      <path
        fill="rgba(241, 241, 241, 0.9)"
        d="M15,15.533V18v1h1h13v2H16h-1v1v2.601l-4.562-4.575L15,15.533 M16,13.145L9.02,20.02l6.98,7V22h14 v-4H16V13.145L16,13.145z"
      />
    </g>
  </ArrowIcon>
)

export default Arrow

Arrow.defaultProps = {
  left: false,
}

Arrow.propTypes = {
  left: Proptypes.bool,
}
