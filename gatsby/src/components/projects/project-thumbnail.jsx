import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { Link } from "gatsby"

const ProjectContainer = styled.figure`
  width: 100%;
  height: 300px;
`
const StyledCaption = styled.figcaption`
  padding-top: 20px;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 1.5rem;
`

const Thumbnail = ({ project }) => (
  <ProjectContainer>
    <Link
      to={`/projects/${project.slug.current}`}
      style={{ textDecoration: "none" }}
    >
      <Img
        fluid={{
          ...project.thumbnail.asset.fluid,
          aspectRatio: 1,
          srcSet: project.thumbnail.asset.fluid.srcSet,
        }}
      />
      <StyledCaption>{project.title}</StyledCaption>
    </Link>
  </ProjectContainer>
)

export default Thumbnail

Thumbnail.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
}
