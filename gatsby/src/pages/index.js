import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Content from "../components/index/content.js"
import Background from "../components/utilities/background.js"

const IndexPage = props => {
  return (
    <Background image={props.data.background.childImageSharp.fluid.originalImg}>
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
    </Background>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    background: file(
      relativePath: { eq: "shaun-darwood-587169-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid {
          originalImg
        }
      }
    }
  }
`
