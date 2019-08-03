import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import Employee from "./employee"

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
    <h3>Our employees</h3>
    {employees.map(employee => (
      <Employee employee={employee} key={employee.id} />
    ))}
  </Container>
)

export default Content

Content.propTypes = {
  employees: PropTypes.instanceOf(Array).isRequired,
}
