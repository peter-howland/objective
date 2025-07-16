import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Socials from './Socials'
import { FaHome } from 'react-icons/fa'

const Nav = styled.nav`
  background: #2a4d8d;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`

const SocialsWrapper = styled.div`
  margin-left: 20px;
`
const NavItems = styled.div`
  display: flex;
  gap: 1.5rem;
`

const NavItem = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #d9e4f5;
  }
`

const NavBar = () => (
  <Nav>
    <NavItems>
      <NavItem to="/">
        <FaHome size={24} />
      </NavItem>
      {/* <NavItem to="/portfolio">Portfolio</NavItem> */}
      <NavItem to="/resume">Resume</NavItem>
      <NavItem to="/recommendations">Recommendations</NavItem>
      <NavItem to="/contact">Contact</NavItem>
    </NavItems>
    <Socials />
  </Nav>
)

export default NavBar
