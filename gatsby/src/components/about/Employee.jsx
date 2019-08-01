import React from "react"
import { StaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"

const Employee = ({ employee }) => (
  <StaticQuery
    query={graphql`
      query {
        sanityImageAsset(id: {eq: ${employee.photo.asset._ref}}) {
          originalFilename
        }
      }
    `}
    render={data => {
      return <div>{data}</div>
    }}
  />
)
export default Employee

Employee.propTypes = {
  employee: PropTypes.instanceOf(Object).isRequired,
}
