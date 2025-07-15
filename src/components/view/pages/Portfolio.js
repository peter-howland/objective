import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
`

const Title = styled.h1`
  color: #2a4d8d;
  margin-bottom: 20px;
  text-align: center;
`

const ProjectList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`

const ProjectCard = styled.div`
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`

const ProjectTitle = styled.h3`
  margin: 10px 0;
  color: #2a4d8d;
`

const ProjectDescription = styled.p`
  color: #333;
  font-size: 0.95rem;
`

const PortfolioPage = () => (
  <PageWrapper>
    <Title>My Portfolio</Title>
    <ProjectList>
      <ProjectCard>
        <ProjectTitle>Project One</ProjectTitle>
        <ProjectDescription>
          Short description of project one.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project Two</ProjectTitle>
        <ProjectDescription>
          Short description of project two.
        </ProjectDescription>
      </ProjectCard>
      <ProjectCard>
        <ProjectTitle>Project Three</ProjectTitle>
        <ProjectDescription>
          Short description of project three.
        </ProjectDescription>
      </ProjectCard>
    </ProjectList>
  </PageWrapper>
)

export default PortfolioPage
