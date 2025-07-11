import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledExampleCard = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 10px 15px; /* compact padding */
  margin-bottom: 10px; /* compact spacing between cards */
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
`

const ProjectName = styled.a`
  font-size: 1.1rem;
  font-weight: bold;
  color: #2a4d8d;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #1f3a66;
  }
`

const LastUpdated = styled.div`
  font-size: 0.85rem;
  color: #666;
  margin-top: 2px;
`

const Description = styled.p`
  margin: 6px 0 0 0; /* reduce top margin, remove bottom margin */
  font-size: 0.9rem;
  line-height: 1.4;
`

const CodeExample = ({ project }) => {
  return (
    <StyledExampleCard>
      <ProjectName
        href={project.link}
        target="_blank"
        rel="noopener noreferrer">
        {project.name}
      </ProjectName>
      <LastUpdated>
        Last Updated: {moment(project.lastUpdated).format('MMM YYYY')}
      </LastUpdated>
      <Description>{project.description}</Description>
    </StyledExampleCard>
  )
}

CodeExample.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lastUpdated: PropTypes.instanceOf(Date).isRequired,
    languages: PropTypes.array // kept if you plan to use later
  }).isRequired
}

export default CodeExample
