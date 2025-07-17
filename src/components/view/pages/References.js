import React from 'react'
import styled from 'styled-components'
import Reference from '../Reference.js'
import references from '../../../data/references.js'

const ReferencesWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #2a4d8d;
`

const References = () => (
  <ReferencesWrapper>
    <PageTitle>References</PageTitle>
    {references.map((rec, idx) => (
      <Reference key={idx} {...rec} />
    ))}
  </ReferencesWrapper>
)

export default References
