import React from "react"
import styled from "styled-components"
import { Link, graphql } from "gatsby"

const Container = styled.section`
  grid-column: content;
`

const Projects = ({ data }) => (
  <Container
    onClick={() => {
      console.log(data)
    }}
  >
    {/* TODO: convert this to render individual project thumbnails */}
    {data.allSanityProject.nodes[0].title}
    <img src={data.allSanityProject.nodes[0].thumbnail.asset.fixed.src} />
  </Container>
)

export default Projects
