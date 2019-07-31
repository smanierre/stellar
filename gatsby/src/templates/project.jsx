import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Lightbox from "../components/projects/lightbox/lightbox"

const Container = styled.section`
  height: 100vh;
`

const StyledImg = styled(Img)`
  max-height: 300px;
  margin-bottom: 25px;
`

const Project = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `Stellar`,
        `avionics`,
        `aviation`,
        "navigation",
        "planes",
        "plane",
        "chester",
        "connecticut",
        "ct",
        "airport",
        "whelen",
      ]}
    />
    <Container>
      <StyledImg fluid={data.sanityProject.thumbnail.asset.fluid} />
      <h1>{data.sanityProject.title}</h1>
      <p style={{ overflow: "scroll", height: 400 }}>
        {data.sanityProject.description}
      </p>
      <Lightbox images={data.sanityProject.images} />
    </Container>
  </Layout>
)

export default Project

export const pageQuery = graphql`
  query($id: String!) {
    sanityProject(id: { eq: $id }) {
      id
      title
      thumbnail {
        asset {
          fluid {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }
      description
      images {
        asset {
          fluid {
            srcSet
            src
            sizes
            aspectRatio
          }
        }
      }
    }
  }
`

Project.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}
