import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Container = styled.section`
  height: 100vh;
`

const StyledImg = styled(Img)`
  max-height: 150px;
  margin-bottom: 25px;
`

const ImgThumbnail = styled(Img)`
  margin: 5px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border: 3px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  margin-bottom: 10%;
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
      <p>{data.sanityProject.description}</p>
      <ImageBox>
        {data.sanityProject.images.map(image => (
          // TODO: Implement/use an external a lightbox for all these photos
          <ImgThumbnail fluid={image.asset.fluid} key={image.asset.fluid.src} />
        ))}
      </ImageBox>
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
