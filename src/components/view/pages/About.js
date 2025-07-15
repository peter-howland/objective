import React from 'react'
import styled from 'styled-components'

const PageWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
`

const Title = styled.h1`
  color: #2a4d8d;
  margin-bottom: 20px;
`

const Text = styled.p`
  color: #333;
  font-size: 1.1rem;
  line-height: 1.6;
`

const AboutPage = () => (
  <PageWrapper>
    <Title>About Me</Title>
    <Text>
      I’m a passionate software developer with experience in building full-stack
      applications. I love React, Node.js, and exploring new technologies!
    </Text>
  </PageWrapper>
)

export default AboutPage
