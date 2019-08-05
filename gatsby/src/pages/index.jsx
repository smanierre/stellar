import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/index/content"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
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
      <Content />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    logo: file(relativePath: { eq: "plane.jpg" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
