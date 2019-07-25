import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Projects from "../components/projects/content"

const ProjectPage = ({ data }) => (
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
    {/* Passing just an array of each project object */}
    <Projects data={data.allSanityProject.edges.map(edge => edge.node)} />
  </Layout>
)

export default ProjectPage

// Gets all the project data that will be needed for the projects page, along with each individual project page.
// IDK why this query works but that's ok...
export const pageQuery = graphql`
  query {
    allSanityProject {
      edges {
        node {
          title
          id
          thumbnail {
            asset {
              fluid {
                srcSet
                src
                sizes
              }
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`

ProjectPage.defaultProps = {
  data: {},
}

ProjectPage.propTypes = {
  data: PropTypes.instanceOf(Object),
}
