import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/about/content"

const AboutPage = ({ data }) => {
  const employees = data.allSanityEmployee.nodes
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
      <Content employees={employees} />
    </Layout>
  )
}

export default AboutPage

AboutPage.propTypes = {
  data: PropTypes.instanceOf(Object).isRequired,
}

export const pageQuery = graphql`
  query {
    allSanityEmployee {
      nodes {
        id
        photo {
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
        name
      }
    }
  }
`
