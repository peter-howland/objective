import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  align-items: center;
  padding: 2rem 1rem; /* top/bottom: 2rem, left/right: 1rem */
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 1rem;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  input,
  textarea,
  button {
    width: 100%;
  }

  button {
    margin-top: 1rem;
  }
`

const Input = styled.input`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
`

const TextArea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  resize: vertical;
  min-height: 150px;
`

const Hidden = styled.p`
  display: none;
`

const Button = styled.button`
  padding: 12px 20px;
  background-color: #2a4d8d;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #1f3a66;
  }
`
const IntroMessage = styled.p`
  text-align: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
`

const Contact = () => {
  return (
    <ContactWrapper>
      <IntroMessage>
        Want to work together? <br /> I'm open to full-time, contract, and
        freelance development work. <br /> <br /> Whether you’re looking for
        someone to build a polished React frontend, connect your API layer, or
        bring a product idea to life, let’s talk!
      </IntroMessage>
      <ContactForm
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="honey-field"
        action="/thank-you">
        <input type="hidden" name="form-name" value="contact" />
        <Hidden>
          <label>
            Only fill this out if you are a human: <input name="honey-field" />
          </label>
        </Hidden>
        <Input type="text" name="name" placeholder="Your Name" required />
        <Input type="email" name="email" placeholder="Your Email" required />
        <TextArea name="message" placeholder="Your Message" required />
        <Button type="submit">Send Message</Button>
      </ContactForm>
    </ContactWrapper>
  )
}

export default Contact
