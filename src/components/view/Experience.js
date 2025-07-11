import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Skill from './Skill'

const StyledExperience = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`

const CompanyName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: #2a4d8d;
`

const EmploymentDates = styled.div`
  font-size: 0.9rem;
  color: #666;
  margin-top: 2px;
`

const JobTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-top: 5px;
  color: #333;
`
const DescriptionList = styled.ul`
  margin-top: 8px;
  padding-left: 20px;
  line-height: 1.5;

  li {
    margin-bottom: 4px;
  }
`

const Experience = ({ job }) => {
  return (
    <StyledExperience>
      <CompanyName>{job.companyName}</CompanyName>
      <EmploymentDates>
        {moment(job.startDate).format('MMM YYYY')} -{' '}
        {job.endDate ? moment(job.endDate).format('MMM YYYY') : 'Present'}
      </EmploymentDates>
      <JobTitle>{job.title}</JobTitle>
      <div />
      <div>
        <ul>
          {job.description.map((text) => (
            <li>{text}</li>
          ))}
        </ul>
      </div>
    </StyledExperience>
  )
}

Experience.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    startDate: PropTypes.instanceOf(Date).isRequired,
    endDate: PropTypes.instanceOf(Date),
    description: PropTypes.arrayOf(PropTypes.string),
    skills: PropTypes.arrayOf(PropTypes.instanceOf(Skill))
  })
}
export default Experience
