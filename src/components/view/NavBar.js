import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
  background: #2a4d8d;
  padding: 1rem;
  display: flex;
  justify-content: center;
`

const NavItem = styled(Link)`
  color: #fff;
  margin: 0 1rem;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    color: #d9e4f5;
  }
`

const NavBar = () => (
  <Nav>
    <NavItem to="/">Home</NavItem>
    <NavItem to="/about">About</NavItem>
    <NavItem to="/portfolio">Portfolio</NavItem>
    <NavItem to="/resume">Resume</NavItem>
    <NavItem to="/contact">Contact</NavItem>
  </Nav>
)

export default NavBar
