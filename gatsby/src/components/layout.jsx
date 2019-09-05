/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import PropTypes from "prop-types"

import Header from "./header/header"
import "./layout.css"

const PageLayout = styled.div`
  max-width: 100vw;
  height: 100vh;
  display: grid;
  background-image: ${({ background }) =>
    background ? `url(${background})` : ""};
  background-size: cover;
  background-position: right;
  overflow: ${({ uri }) => (uri === "/" ? "hidden" : "")};
  grid-template-rows: [header] 75px auto;
  grid-template-columns: [gutter-left] 1fr [content] 5fr [gutter-right] 1fr;

  @media screen and (min-width: 900px) {
    grid-template-columns: [gutter-left] 1fr [content] 10fr [gutter-right] 1fr;
  }
`

const MainLayout = styled.main`
  grid-column: content;
  grid-row: 2;
`

const Layout = props => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const { uri, background } = props
      return (
        <PageLayout background={background} uri={uri}>
          <Header siteTitle={data.site.siteMetadata.title} uri={uri} />
          <MainLayout>{props.children}</MainLayout>
        </PageLayout>
      )
    }}
  />
)

export default Layout

Layout.defaultProps = {
  uri: "",
  background: "",
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  background: PropTypes.string,
  uri: PropTypes.string,
}
