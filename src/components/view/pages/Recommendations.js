import React from 'react'
import styled from 'styled-components'
import Recommendation from '../Recommendation'
import recommendations from '../../../data/recommendations.js'

const RecommendationsWrapper = styled.div`
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
`

const PageTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #2a4d8d;
`

const Recommendations = () => (
  <RecommendationsWrapper>
    <PageTitle>Recommendations</PageTitle>
    {recommendations.map((rec, idx) => (
      <Recommendation key={idx} {...rec} />
    ))}
  </RecommendationsWrapper>
)

export default Recommendations
