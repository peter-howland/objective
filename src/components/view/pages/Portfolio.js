import React from 'react'
import styled from 'styled-components'

const Section = styled.section`
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
`

const Project = styled.div`
  margin-bottom: 3rem;
  border-bottom: 1px solid #ccc;
  padding-bottom: 2rem;
`

const Title = styled.h2`
  font-size: 1.75rem;
  margin-bottom: 0.5rem;
`

const Link = styled.a`
  display: inline-block;
  margin-bottom: 1rem;
  color: #2a4d8d;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`

const VideoWrapper = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;
  background: #000;
  margin-top: 1rem;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Portfolio = () => {
  return (
    <Section>
      <Project>
        <Title>🧑‍💻 Personal Website</Title>
        <Link
          href="https://github.com/peter-howland/objective"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Repo
        </Link>
        <Description>
          This portfolio site was built to showcase my work, skills, and
          experience in a clean and responsive format. It's a React-based
          project styled with styled-components and includes mobile-first
          design, a Nav Bar, and a recommendations section styled after
          LinkedIn. I designed and built the site from the ground up to serve as
          both a technical demo and a living resume.
        </Description>
      </Project>

      <Project>
        <Title>📋 Character Sheet</Title>
        <Link
          href="https://github.com/peter-howland/CharacterSheet"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Repo
        </Link>
        <Description>
          Originally built to deepen my understanding of Java, Spring MVC, and
          Spring Data JPA, this project is a back-end-driven character sheet
          manager for Dungeons & Dragons 5th Edition, complete with a searchable
          spell list. It was a valuable learning experience in structuring data
          relationships, working with Hibernate, and understanding how Spring
          Boot ties everything together. A future version will include a React
          front-end and be deployed live.
        </Description>
      </Project>

      <Project>
        <Title>🎮 Marvel Legendary (Unity Game Demo)</Title>
        <Description>
          One of my earliest ventures into game development, this Unity project
          brings the popular Marvel Legendary card game into the digital realm.
          The game logic mirrors the tabletop experience while introducing
          animations and a digital rules engine.
        </Description>
        <VideoWrapper>
          <iframe
            src="https://www.youtube.com/embed/Emjqfc3Eo40"
            title="Marvel Legendary Unity Demo"
            frameBorder="0"
            allowFullScreen></iframe>
        </VideoWrapper>
      </Project>

      <Project>
        <Title>🌳 Project Maple</Title>
        <Link
          href="https://github.com/peter-howland/project-maple-v2"
          target="_blank"
          rel="noopener noreferrer">
          GitHub Repo
        </Link>
        <Description>
          Built as a coding challenge for a former employer, Project Maple is a
          real-time collaborative tree diagram editor. Users in separate
          sessions can modify the tree, and updates are reflected live without
          requiring a page reload. It demonstrates my ability to build reactive,
          stateful apps that synchronize across multiple clients.
        </Description>
      </Project>
    </Section>
  )
}

export default Portfolio
