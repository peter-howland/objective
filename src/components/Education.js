import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledEducationCard = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 10px 15px; /* tighter vertical padding */
  margin-bottom: 10px; /* less margin between cards */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08); /* softer, smaller shadow */
`

const SchoolName = styled.div`
  font-size: 1.1rem; /* slightly smaller */
  font-weight: bold;
  color: #2a4d8d;
  margin-bottom: 2px; /* smaller gap below name */
`

const SchoolLocation = styled.div`
  font-size: 0.85rem; /* slightly smaller */
  color: #666;
  margin-bottom: 4px; /* less space before degree list */
`

const DegreeList = styled.ul`
  margin: 0; /* remove default margin */
  padding-left: 18px; /* slightly tighter indent */
  line-height: 1.4; /* tighter line spacing */

  li {
    margin-bottom: 2px; /* smaller gap between list items */
    font-size: 0.9rem;
  }
`

const Education = ({ school }) => {
  return (
    <StyledEducationCard>
      <SchoolName>{school.name}</SchoolName>
      <SchoolLocation>{school.location}</SchoolLocation>
      <DegreeList>
        {school.degrees.map((degree, i) => (
          <li key={i}>
            {degree.name} - {degree.subject}
            {degree.graduationDate &&
              ` - Graduated: ${moment(degree.graduationDate).format(
                'MMM YYYY'
              )}`}
          </li>
        ))}
      </DegreeList>
    </StyledEducationCard>
  )
}

Education.propTypes = {
  school: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    degrees: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        graduationDate: PropTypes.instanceOf(Date)
      })
    ).isRequired
  }).isRequired
}

export default Education
