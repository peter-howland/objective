import React from 'react'
import styled from 'styled-components'

// Card container
const RecommendationCard = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`

// Circular profile photo
const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`

// Text content
const TextContent = styled.div`
  flex: 1;
`

const Name = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: #2a4d8d;
  margin-bottom: 4px;
`

const Title = styled.div`
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 8px;
`

// The recommendation text, split into paragraphs on newlines
const RecommendationText = ({ text }) => (
  <div>
    {text.split('\n').map((line, idx) => (
      <p key={idx} style={{ margin: '0 0 6px 0' }}>
        {line}
      </p>
    ))}
  </div>
)

const Recommendation = ({ name, title, photo, text }) => (
  <RecommendationCard>
    <ProfileImage src={photo} alt={`${name}'s profile`} />
    <TextContent>
      <Name>{name}</Name>
      <Title>{title}</Title>
      <RecommendationText text={text} />
    </TextContent>
  </RecommendationCard>
)

export default Recommendation
