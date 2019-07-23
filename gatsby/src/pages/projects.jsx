import React from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/utilities/background"
import Projects from "../components/projects/projects-content"

const ProjectPage = ({ data }) => (
  <Background>
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
      <Projects data={data} />
    </Layout>
  </Background>
)

export default ProjectPage

export const pageQuery = graphql`
  query {
    allSanityProject {
      nodes {
        title
        thumbnail {
          asset {
            fixed(height: 100, width: 100) {
              src
            }
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
