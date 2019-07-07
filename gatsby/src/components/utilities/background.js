import styled from "styled-components"

const Background = styled.div`
  background-image: ${props => props.background};
  background-size: cover;
  height: 100vh;
  grid-column: gutter-left / -1;
`

export default Background
