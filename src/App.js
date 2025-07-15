import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { resumeContent } from './resumeContent'
import NavBar from './components/view/NavBar'
import Footer from './components/view/Footer'
import HomePage from './components/view/pages/Home'
import AboutPage from './components/view/pages/About'
import ContactPage from './components/view/pages/Contact'
import ThankYouPage from './components/view/pages/ThankYou'
import PortfolioPage from './components/view/pages/Portfolio'
import ResumePage from './components/view/pages/Resume'
import styled from 'styled-components'

const AppContainer = styled.div`
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f0f2f5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const Content = styled.main`
  flex: 1;
  padding: 20px;
`

const App = () => (
  <Router>
    <AppContainer>
      <NavBar />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/resume" element={<ResumePage {...resumeContent} />} />
        </Routes>
      </Content>
      <Footer />
    </AppContainer>
  </Router>
)

export default App
