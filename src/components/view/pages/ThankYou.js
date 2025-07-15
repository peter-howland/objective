import React from 'react'
import styled from 'styled-components'

const ThankYouWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  padding: 40px;
  text-align: center;
`

const ThankYouBox = styled.div`
  background: #f9fafc;
  padding: 40px 60px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-width: 600px;
`

const Title = styled.h1`
  font-size: 2rem;
  color: #2a4d8d;
  margin-bottom: 20px;
`

const Message = styled.p`
  font-size: 1.2rem;
  color: #333;
`

const ThankYou = () => {
  return (
    <ThankYouWrapper>
      <ThankYouBox>
        <Title>Thank you!</Title>
        <Message>
          Your message has been sent successfully. I’ll get back to you soon!
        </Message>
      </ThankYouBox>
    </ThankYouWrapper>
  )
}

export default ThankYou
