import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/utilities/background.js"

const ProjectPage = props => (
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
  </Layout>
  </Background>
)

export default ProjectPage
