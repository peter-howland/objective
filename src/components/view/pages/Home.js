import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
`

const Title = styled.h1`
  color: #2a4d8d;
  margin-bottom: 20px;
`

const Text = styled.p`
  color: #333;
  font-size: 1.1rem;
`

const HomePage = () => (
  <PageWrapper>
    <Title>Welcome to My Website</Title>
    <Text>This is the landing page. Make it awesome!</Text>
  </PageWrapper>
)

export default HomePage
