/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "styled-components"

import Header from "./header/header"
import "./layout.css"

//Because gatsby can't compile with references to window I guess
const windowGlobal = typeof window !== "undefined" && window

const PageLayout = styled.div`
  max-width: ${() => windowGlobal.innerWidth}px;
  display: grid;
  grid-template-rows: [header] ${() =>
      windowGlobal.innerWidth < 900 ? "50px" : "75px"} auto;
  grid-template-columns: [gutter-left] 50px [content] 1fr [gutter-right] 50px;

  @media (min-width: 900px) {
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
    render={data => (
      <PageLayout>
        <Header siteTitle={data.site.siteMetadata.title} />
        <MainLayout>{props.children}</MainLayout>
      </PageLayout>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
