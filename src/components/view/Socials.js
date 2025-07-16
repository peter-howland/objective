import React from 'react'
import styled from 'styled-components'
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa'

const SocialsWrapper = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`

const SocialLink = styled.a`
  color: #fff;
  font-size: 1.2rem;
  margin-left: 10px;

  &:hover {
    color: #d9e4f5;
  }
`

const Socials = () => {
  return (
    <SocialsWrapper>
      <SocialLink
        href="https://www.facebook.com/phowland48"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook">
        <FaFacebookF />
      </SocialLink>

      <SocialLink
        href="https://www.linkedin.com/in/peter-howland"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn">
        <FaLinkedinIn />
      </SocialLink>

      <SocialLink
        href="https://github.com/peter-howland"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub">
        <FaGithub />
      </SocialLink>
    </SocialsWrapper>
  )
}

export default Socials
