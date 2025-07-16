import React from 'react'
import styled from 'styled-components'

const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px;
`

const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 800px;
  background: #f9fafc;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`

const Input = styled.input`
  padding: 12px 15px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
`

const TextArea = styled.textarea`
  padding: 12px 15px;
  font-size: 1rem;
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
  font-size: 1rem;
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

const Contact = () => {
  return (
    <ContactWrapper>
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
