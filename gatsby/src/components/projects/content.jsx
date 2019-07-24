import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Thumbnail from "./project-thumbnail"

const Container = styled.section`
  grid-column: content;
  display: flex;
  flex-direction: column;
`

const Projects = ({ data }) => (
  <Container
    onClick={() => {
      console.log(data)
    }}
  >
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
