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
import Background from "./utilities/background"
import "./layout.css"

const PageLayout = styled.div`
  max-width: 100vw;
  display: grid;

  grid-template-rows: [header] 75px auto;
  grid-template-columns: [gutter-left] 50px [content] 1fr [gutter-right] 50px;

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
    render={data => (
      <Background>
        <PageLayout>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MainLayout>{props.children}</MainLayout>
        </PageLayout>
      </Background>
    )}
  />
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
