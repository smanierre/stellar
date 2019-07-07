import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Content from "../components/index/content.js"
import Background from "../components/utilities/background.js"

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { width: window.innerWidth }
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize() {
    this.setState({ width: window.innerWidth })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }
  render() {
    return (
      <Background
        background={() =>
          this.state.width < 900
            ? `linear-gradient(to bottom, #e8e8e8 0%,#6d6d6d 100%);`
            : `url(${
                this.props.data.background.childImageSharp.fluid.originalImg
              });`
        }
      >
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
