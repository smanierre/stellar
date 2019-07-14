import React from "react"
import styled from "styled-components"

const RelativeContainer = styled.div`
  display: inline-block;
  position: relative;
`

export default props => (
  <RelativeContainer className={props.className}>
    {props.children}
  </RelativeContainer>
)
