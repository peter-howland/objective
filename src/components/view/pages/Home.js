import React from 'react'
import styled from 'styled-components'

const HomeWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
`

const Hero = styled.section`
  text-align: center;
  margin-bottom: 60px;

  h1 {
    font-size: 3rem;
    color: #2a4d8d;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.25rem;
    color: #4f6d9c;
    margin-bottom: 30px;
  }
`

const CTAButton = styled.a`
  background-color: #2a4d8d;
  color: white;
  padding: 14px 28px;
  font-weight: bold;
  text-decoration: none;
  border-radius: 6px;
  font-size: 1.1rem;

  &:hover {
    background-color: #234170;
  }
`

const Section = styled.section`
  margin-bottom: 50px;
`

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #2a4d8d;
  border-bottom: 3px solid #2a4d8d;
  padding-bottom: 6px;
  margin-bottom: 20px;
`

const IntroText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
`

const SkillsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding: 0;
  margin: 0;
`

const SkillItem = styled.li`
  background-color: #e1e7f0;
  color: #2a4d8d;
  padding: 8px 14px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 0.95rem;
`

const ProjectsPreview = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`

const ProjectCard = styled.a`
  display: block;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 18px 16px;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 6px rgb(0 0 0 / 0.1);
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: 0 5px 12px rgb(0 0 0 / 0.2);
  }

  h3 {
    margin-top: 0;
    margin-bottom: 8px;
    color: #2a4d8d;
  }

  p {
    margin: 0;
    color: #555;
  }
`

const ContactTeaser = styled.div`
  text-align: center;
  font-size: 1.1rem;

  a {
    color: #2a4d8d;
    font-weight: 600;
    text-decoration: underline;

    &:hover {
      color: #234170;
    }
  }
`

const Home = () => {
  const skills = [
    'React',
    'Node.js',
    'JavaScript',
    'TypeScript',
    'PostgreSQL',
    'Docker'
  ]

  const featuredProjects = [
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio built with React and styled-components.',
      link: '/portfolio'
    },
    {
      title: 'Task Manager App',
      description:
        'Full-stack task management app with real-time collaboration.',
      link: '/portfolio/task-manager'
    },
    {
      title: 'Blog Platform',
      description:
        'A blogging platform featuring markdown support and comments.',
      link: '/portfolio/blog-platform'
    }
  ]

  return (
    <HomeWrapper>
      <Hero>
        <h1>Hi, I’m Peter — a Software Engineer</h1>
        <p>
          Building scalable full-stack web applications with React and Node.js.
        </p>
        <CTAButton href="/resume">View My Resume</CTAButton>
      </Hero>

      <Section>
        <SectionTitle>About Me</SectionTitle>
        <IntroText>
          I’m passionate about crafting clean, efficient, and user-friendly
          software solutions. With experience in modern web technologies, I
          enjoy turning complex problems into simple, elegant applications.
        </IntroText>
      </Section>

      <Section>
        <SectionTitle>Key Skills</SectionTitle>
        <SkillsList>
          {skills.map((skill) => (
            <SkillItem key={skill}>{skill}</SkillItem>
          ))}
        </SkillsList>
      </Section>

      <Section>
        <SectionTitle>Featured Projects</SectionTitle>
        <ProjectsPreview>
          {featuredProjects.map(({ title, description, link }) => (
            <ProjectCard href={link} key={title}>
              <h3>{title}</h3>
              <p>{description}</p>
            </ProjectCard>
          ))}
        </ProjectsPreview>
      </Section>

      <ContactTeaser>
        Interested in working together? <a href="/contact">Let’s connect!</a>
      </ContactTeaser>
    </HomeWrapper>
  )
}

export default Home
