import React, { Component } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Content from "../components/index/content.js"
import Background from "../components/utilities/background.js"

//Because you can't reference window in gatsby
const windowGlobal = typeof window !== "undefined" && window

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = { width: windowGlobal.innerWidth }
    this.handleResize = this.handleResize.bind(this)
  }

  handleResize() {
    this.setState({ width: windowGlobal.innerWidth })
  }

  componentDidMount() {
    windowGlobal.addEventListener("resize", this.handleResize)
  }
  render() {
    return (
      <Background
        background={() =>
          this.state.width < 900
            ? `linear-gradient(to bottom, rgba(234,231,220,1) 0%,rgba(234,231,220,1) 100%); `
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
