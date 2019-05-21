import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import ToolBar from "@material-ui/core/Toolbar"

const Header = ({ siteTitle }) => (
  <header>
    <AppBar position="static">
      <ToolBar>Home</ToolBar>
    </AppBar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
