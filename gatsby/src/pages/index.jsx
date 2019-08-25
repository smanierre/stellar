import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/index/content"

const IndexPage = props => {
  const { data, uri } = props
  return (
    <Layout
      background={data.background.childImageSharp.fluid.originalImg}
      uri={uri}
    >
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
      <Content />
    </Layout>
  )
}

export default IndexPage

IndexPage.propTypes = {
  uri: PropTypes.string.isRequired,
  data: PropTypes.instanceOf(Object).isRequired,
}
export const pageQuery = graphql`
  query {
    background: file(relativePath: { eq: "plane.jpg" }) {
      childImageSharp {
        fluid {
          originalImg
        }
      }
    }
  }
`
