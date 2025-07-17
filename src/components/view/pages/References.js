import React from 'react'
import styled from 'styled-components'
import Reference from '../Reference.js'
import references from '../../../data/references.js'

const ReferencesWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 2rem 0 2rem 2rem;

  @media (max-width: 768px) {
    padding: 0.4rem;
  }
`

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #2a4d8d;
`
const ReferenceCard = styled.div`
  margin-bottom: 2rem;
  padding: 1.5rem;
  background: #f9f9f9;
  border-radius: 8px;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.95rem;
  }
`

const References = () => (
  <ReferencesWrapper>
    <PageTitle>References</PageTitle>
    {references.map((rec, idx) => (
      <ReferenceCard>
        <Reference key={idx} {...rec} />
      </ReferenceCard>
    ))}
  </ReferencesWrapper>
)

export default References
