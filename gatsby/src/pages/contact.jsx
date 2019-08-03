import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Content from "../components/contact/content"

const ContactPage = () => {
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

export default ContactPage
