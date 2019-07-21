import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Looks like you&apos;re flying in the wrong direction</h1>
    <Link to="/">Go Home!</Link>
  </Layout>
)

export default NotFoundPage
