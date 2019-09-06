import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Thumbnail from "./project-thumbnail"

const Container = styled.section`
  padding-top: 10%;
  grid-column: content;
  display: flex;
  flex-direction: column;
  border-top: 1px solid rgba(0, 0, 0, 0.5);

  @media screen and (min-width: 900px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const H1 = styled.h1`
  text-align: center;
  margin: 0 auto 50px auto;

  @media screen and (min-width: 900px) {
    font-size: 3rem;
    margin-top: 10%;
  }
`

const Projects = ({ data }) => (
  <>
    <H1>Our Work</H1>
    <Container>
      {data.map(project => {
        return <Thumbnail project={project} key={project.id} />
      })}
    </Container>
  </>
)

export default Projects

Projects.defaultProps = {
  data: [],
}

Projects.propTypes = {
  data: PropTypes.instanceOf(Array),
}
