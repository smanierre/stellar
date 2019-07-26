import React from "react"
import styled from "styled-components"

const ArrowIcon = styled.svg`
  position: absolute;
  top: 50%;
  cursor: pointer;
  ${props =>
    props.left
      ? `left: 25px;
        transform: rotate(180deg) translateY(-50%);`
      : `right: 25px
        transform: translateY(-50%)`}
`

const Arrow = ({ left }) => (
  <ArrowIcon
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    width="16"
    height="16"
    viewBox="0 0 40 40"
    style={{ fill: "rgba(241, 241, 241, .8" }}
    left={left}
  >
    <path
      fill="#8bb7f0"
      d="M20,38.52c-10.201,0-18.5-8.299-18.5-18.5S9.799,1.52,20,1.52s18.5,8.299,18.5,18.5 S30.201,38.52,20,38.52z"
    />
    <path
      fill="#4e7ab5"
      d="M20,2.02c9.925,0,18,8.075,18,18s-8.075,18-18,18s-18-8.075-18-18S10.075,2.02,20,2.02 M20,1.02 c-10.493,0-19,8.507-19,19s8.507,19,19,19s19-8.507,19-19S30.493,1.02,20,1.02L20,1.02z"
    />
    <path
      fill="#fff"
      d="M20.02,35.52c-8.547,0-15.5-6.953-15.5-15.5s6.953-15.5,15.5-15.5s15.5,6.953,15.5,15.5 S28.566,35.52,20.02,35.52z"
    />
    <path
      fill="#4e7ab5"
      d="M20.02,5.02c8.271,0,15,6.729,15,15s-6.729,15-15,15s-15-6.729-15-15S11.749,5.02,20.02,5.02 M20.02,4.02c-8.837,0-16,7.163-16,16s7.163,16,16,16c8.837,0,16-7.163,16-16S28.856,4.02,20.02,4.02L20.02,4.02z"
    />
    <g>
      <path
        fill="#8bb7f0"
        d="M9.729 20.023L15.5 14.339 15.5 18.5 29.5 18.5 29.5 21.5 15.5 21.5 15.5 25.81z"
      />
      <path
        fill="#4e7ab5"
        d="M15,15.533V18v1h1h13v2H16h-1v1v2.601l-4.562-4.575L15,15.533 M16,13.145L9.02,20.02l6.98,7V22h14 v-4H16V13.145L16,13.145z"
      />
    </g>
  </ArrowIcon>
)

export default Arrow
