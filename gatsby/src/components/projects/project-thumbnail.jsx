import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectContainer = styled(Link)`
  width: 100%;
  height: 300px;
`
const Thumbnail = ({ project }) => (
  <ProjectContainer to={`/project/${project.slug.current}`}>
    <Img
      fluid={{
        ...project.thumbnail.asset.fluid,
        aspectRatio: 1,
        srcSet: project.thumbnail.asset.fluid.srcSet,
      }}
    />
  </ProjectContainer>
)

export default Thumbnail

Thumbnail.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
}
