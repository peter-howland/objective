import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { FaBars } from 'react-icons/fa'
import Socials from './Socials'

const Nav = styled.nav`
  background: #2a4d8d;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
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

const MobileSidebarWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    background: #2a4d8d;
    height: 100vh;
    width: 40px;
    align-items: center;
    padding-top: 1rem;
    z-index: 1100;
  }
`

const SidebarButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
`

const SidebarMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ open }) => (open ? '40px' : '-250px')};
  width: 250px;
  height: 100vh;
  background-color: #2a4d8d;
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem;
  transition: left 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: 769px) {
    display: none;
  }
`

const SidebarNavItem = styled(Link)`
  color: white;
  margin-bottom: 1.5rem;
  text-decoration: none;
  font-size: 1.2rem;

  &:hover {
    color: #d9e4f5;
  }
`

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setMenuOpen(false)
      }
    }

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuOpen])

  return (
    <>
      <Nav>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/resume">Resume</NavItem>
          <NavItem to="/portfolio">Portfolio</NavItem>
          <NavItem to="/references">References</NavItem>
          <NavItem to="/contact">Contact</NavItem>
        </div>
        <Socials />
      </Nav>

      <MobileSidebarWrapper>
        <SidebarButton
          ref={buttonRef}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen(!menuOpen)}>
          <FaBars />
        </SidebarButton>
      </MobileSidebarWrapper>

      <SidebarMenu ref={menuRef} open={menuOpen}>
        <SidebarNavItem to="/" onClick={() => setMenuOpen(false)}>
          Home
        </SidebarNavItem>
        <SidebarNavItem to="/resume" onClick={() => setMenuOpen(false)}>
          Resume
        </SidebarNavItem>
        <SidebarNavItem to="/references" onClick={() => setMenuOpen(false)}>
          References
        </SidebarNavItem>
        <SidebarNavItem to="/contact" onClick={() => setMenuOpen(false)}>
          Contact
        </SidebarNavItem>
        <Socials />
      </SidebarMenu>
    </>
  )
}

export default NavBar
