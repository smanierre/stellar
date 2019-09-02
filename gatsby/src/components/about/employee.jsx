import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Img from "gatsby-image"

const StyledEmployee = styled.article`
  margin: 5vh auto 5vh auto;
  border-bottom: 1px solid rgba(201, 199, 196, 1);
  padding-top: 5%;
`

const StyledImg = styled(Img)`
  height: 300px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`

const Styledh4 = styled.h4`
  margin-top: 25px;
`

// TODO: Style for desktop
const Employee = ({ employee }) => (
  <StyledEmployee>
    <StyledImg fluid={{ ...employee.photo.asset.fluid }} />
    <Styledh4>{employee.name}</Styledh4>
    <p>{employee.description}</p>
  </StyledEmployee>
)
export default Employee

Employee.propTypes = {
  employee: PropTypes.instanceOf(Object).isRequired,
}
