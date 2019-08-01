import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Employee from "./Employee"

const Container = styled.section`
  margin-top: 50px;
`
const StyledH2 = styled.h2`
  font-size: 2rem;
`

const Content = ({ employees }) => (
  <Container>
    <StyledH2>About us</StyledH2>
    <p>
      We are a small company based out of Chester Airport. We specialize in
      installing avionics
    </p>
    <p>Meet our staff:</p>
    {employees.map(employee => (
      <Employee employee={employee} />
    ))}
  </Container>
)

export default Content

Content.propTypes = {
  employees: PropTypes.instanceOf(Array).isRequired,
}
