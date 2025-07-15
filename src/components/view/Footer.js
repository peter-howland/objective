import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: #2a4d8d;
  color: #fff;
  text-align: center;
  padding: 0.8rem;
  font-size: 0.9rem;
`

const Footer = () => (
  <FooterWrapper>
    © {new Date().getFullYear()} Peter Howland. All rights reserved.
  </FooterWrapper>
)

export default Footer
