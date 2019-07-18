import styled from "styled-components"

const ScreenCover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  opacity: 0;
  z-index: 10;
  visbility: hidden;
  transition: all 0.3s;
  pointer-events: none;
`

export default ScreenCover
