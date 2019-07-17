import styled from "styled-components"

const Background = styled.div`
  background-size: cover;
  height: 100vh;
  grid-column: gutter-left / -1;

  @media screen and (max-width: 899px) {
    background-color: rgba(234, 231, 220, 1);
  }

  @media screen and (min-width: 900px) {
    background-image: url(${props => props.image});
  }
`

export default Background
