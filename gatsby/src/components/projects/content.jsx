import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Thumbnail from "./project-thumbnail"

const Container = styled.section`
  padding-top: 10%;
  grid-column: content;
  display: flex;
  flex-direction: column;
`

const H1 = styled.h1`
  text-align: center;
  margin: 0 auto 50px auto;
`

const Projects = ({ data }) => (
  <Container>
    <H1>Our Work</H1>
    {data.map(project => (
      <Thumbnail project={project} key={project.id} />
    ))}
  </Container>
)

export default Projects

Projects.defaultProps = {
  data: [],
}

Projects.propTypes = {
  data: PropTypes.instanceOf(Array),
}
