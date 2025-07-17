import styled from 'styled-components'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Skill from '../Skill'
import Experience from '../Experience'
import Education from '../Education'
import CodeExample from '../CodeExample'
import { motion } from 'framer-motion'

const StyledResume = styled.div`
  padding: 2rem;
  position: relative;
  min-height: 100vh;
  color: #333;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  scroll-behavior: smooth;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 2rem 0.3rem 2rem 1.5rem;
    padding-top: 0;
    font-size: 0.95rem;
  }
`
const DownloadButton = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;
  background-color: #2a4d8d;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #1e386b;
  }

  @media (max-width: 768px) {
    position: relative;
    display: block;
    margin: 1rem auto;
    top: 0;
    right: 0;
    width: fit-content;
    border-radius: 5px;
    text-align: center;
  }
`
const Body = styled.div`
  margin: 30px auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  max-width: 1000px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);

  p {
    margin-top: 5px;
    margin-bottom: 15px;
  }
  @media (max-width: 768px) {
    padding: 30px 10px;
  }
`
const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: stretch;
  }
  h1 {
    margin: 0;
    font-size: 2.5rem;
    color: #2a4d8d;
  }

  h2 {
    margin: 0;
    font-size: 1.5rem;
    font-weight: 400;
    color: #4f6d9c;
  }
`
const SkillCategoryCard = styled.div`
  background: #f9fafc;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
`
const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0;
`

const CategoryTitle = styled.div`
  font-size: 1rem;
  font-weight: bold;
  color: #2a4d8d;
  background: rgba(255, 255, 255, 0.1);
  padding: 4px 8px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  margin: 10px 0 8px;

  svg {
    margin-right: 6px;
  }
`

const SubCategoryTitle = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #1f3a66;
  margin-bottom: 4px;
`

const SectionDivider = styled.hr`
  border: none;
  height: 1px;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.4),
    rgba(255, 255, 255, 0)
  );
  margin: 20px 0;
  background: linear-gradient(
    to right,
    rgba(42, 77, 141, 0),
    rgba(42, 77, 141, 0.4),
    rgba(42, 77, 141, 0)
  );
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-gap: 12px;
  margin: 10px 0;
`
const SectionHeader = styled.h3`
  margin-top: 20px;
  margin-bottom: 10px;
  border-bottom: 2px solid #2a4d8d;
  font-size: 1.3rem;
`

Date.daysBetween = (date1, date2) => {
  let one_day = 1000 * 60 * 60 * 24
  let date1_ms = date1.getTime()
  let date2_ms = date2 ? date2.getTime() : new Date()
  let difference_ms = date2_ms - date1_ms

  return Math.round(difference_ms / one_day)
}

const Resume = ({ summary, experience, education, codeExamples }) => {
  const [skills, setSkills] = useState([])
  const [primaryLanguages, setPrimaryLanguages] = useState([])
  const [secondaryLanguages, setSecondaryLanguages] = useState([])
  const [datbases, setDatabases] = useState([])
  const [
    librariesAndFrameworksJavascript,
    setLibrariesAndFrameworksJavascript
  ] = useState([])
  const [librariesAndFrameworksJava, setLibrariesAndFrameworksJava] = useState(
    []
  )
  const [buildTools, setBuildTools] = useState([])
  const [sourceControl, setSourceControl] = useState([])
  const [lifecycleManagement, setLifecycleManagement] = useState([])
  const [devEnvironment, setDevEnvironment] = useState([])
  const [continuousIntegration, setContinuousIntegration] = useState([])
  const [serverDeployment, setServerDeployment] = useState([])
  const [operatingSystem, setOperatingSystem] = useState([])
  const [other, setOther] = useState([])

  const comparator = (a, b) => b.experience - a.experience
  useEffect(() => {
    const accum = {}
    experience.forEach((job) => {
      const totalExperience = Date.daysBetween(job.startDate, job.endDate)
      job.skills.forEach((s) => {
        const skill = accum[s.id]
        if (skill) {
          skill.experience += totalExperience
        } else {
          accum[s.id] = s
          accum[s.id].experience = totalExperience
        }
      })
    })
    setSkills(Object.values(accum))
  }, [experience])

  useEffect(() => {
    const primeLang = []
    const secLang = []
    const db = []
    const libAndFrameJavascript = []
    const libAndFrameJava = []
    const build = []
    const source = []
    const alm = []
    const ide = []
    const cicd = []
    const server = []
    const os = []
    const misc = []

    if (skills.length > 0) {
      skills.sort(comparator)
      skills.forEach((skill) => {
        switch (skill.type) {
          case 'primaryLanguage':
            primeLang.push(skill)
            break
          case 'secondaryLanguage':
            secLang.push(skill)
            break
          case 'database':
            db.push(skill)
            break
          case 'library_framework_javascript':
            libAndFrameJavascript.push(skill)
            break
          case 'library_framework_java':
            libAndFrameJava.push(skill)
            break
          case 'build_tool':
            build.push(skill)
            break
          case 'source_control':
            source.push(skill)
            break
          case 'alm':
            alm.push(skill)
            break
          case 'ide':
            ide.push(skill)
            break
          case 'cicd':
            cicd.push(skill)
            break
          case 'servers':
            server.push(skill)
            break
          case 'os':
            os.push(skill)
            break
          case 'other':
            misc.push(skill)
            break
          default:
            break
        }
      })
      setPrimaryLanguages(primeLang)
      setSecondaryLanguages(secLang)
      setDatabases(db)
      setLibrariesAndFrameworksJavascript(libAndFrameJavascript)
      setLibrariesAndFrameworksJava(libAndFrameJava)
      setBuildTools(build)
      setSourceControl(source)
      setLifecycleManagement(alm)
      setDevEnvironment(ide)
      setContinuousIntegration(cicd)
      setServerDeployment(server)
      setOperatingSystem(os)
      setOther(misc)
    }
  }, [skills])

  return (
    <StyledResume>
      <DownloadButton href="/Peter Howland - Resume 2025.pdf" download>
        Download Resume (PDF)
      </DownloadButton>
      <Header>
        <h1> Peter Howland </h1>
        <h2> Software Engineer </h2>
      </Header>
      <Body>
        <div>
          <strong> Summary: </strong>
          <p> {summary} </p>
        </div>
        <SectionDivider />
        <SectionHeader>Key Competencies</SectionHeader>
        <CategoryTitle>🧩 Languages</CategoryTitle>
        <GridWrapper>
          <SkillCategoryCard>
            <SubCategoryTitle>Primary</SubCategoryTitle>
            <SkillsList>
              {primaryLanguages &&
                primaryLanguages.map((skill) => {
                  return <Skill skill={skill} />
                })}
            </SkillsList>
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Secondary</SubCategoryTitle>
            <SkillsList>
              {secondaryLanguages &&
                secondaryLanguages.map((skill) => {
                  return <Skill skill={skill} />
                })}
            </SkillsList>
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Databases</SubCategoryTitle>
            <SkillsList>
              {datbases &&
                datbases.map((skill) => {
                  return <Skill skill={skill} />
                })}
            </SkillsList>
          </SkillCategoryCard>
        </GridWrapper>
        <CategoryTitle>📚 Libraries & Frameworks</CategoryTitle>
        <GridWrapper>
          <SkillCategoryCard>
            <SubCategoryTitle>Javascript</SubCategoryTitle>
            <SkillsList>
              {librariesAndFrameworksJavascript &&
                librariesAndFrameworksJavascript.map((skill) => {
                  return <Skill skill={skill} />
                })}
            </SkillsList>
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Java</SubCategoryTitle>
            <SkillsList>
              {librariesAndFrameworksJava &&
                librariesAndFrameworksJava.map((skill) => {
                  return <Skill skill={skill} />
                })}
            </SkillsList>
          </SkillCategoryCard>
        </GridWrapper>
        <CategoryTitle>🛠 Software and Tools</CategoryTitle>
        <GridWrapper>
          <SkillCategoryCard>
            <SubCategoryTitle> Build Tools</SubCategoryTitle>
            {buildTools &&
              buildTools.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Source Control</SubCategoryTitle>
            {sourceControl &&
              sourceControl.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>ALM Software</SubCategoryTitle>
            {lifecycleManagement &&
              lifecycleManagement.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>IDEs</SubCategoryTitle>
            {devEnvironment &&
              devEnvironment.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>CI/CD Tools</SubCategoryTitle>
            {continuousIntegration &&
              continuousIntegration.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Server & Deployment Tools</SubCategoryTitle>
            {serverDeployment &&
              serverDeployment.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Operating Systems</SubCategoryTitle>
            {operatingSystem &&
              operatingSystem.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
          <SkillCategoryCard>
            <SubCategoryTitle>Other</SubCategoryTitle>
            {other &&
              other.map((skill) => {
                return <Skill skill={skill} />
              })}
          </SkillCategoryCard>
        </GridWrapper>
        <SectionDivider />
        <SectionHeader>Professional Experience</SectionHeader>
        {experience &&
          experience.map((job) => {
            return <Experience job={job} />
          })}
        <SectionDivider />
        <SectionHeader>Education</SectionHeader>
        {education &&
          education.map((school) => {
            return <Education school={school} />
          })}
        <SectionDivider />
        <SectionHeader>Code Examples</SectionHeader>
        {codeExamples &&
          codeExamples.map((project) => {
            return <CodeExample project={project} />
          })}
      </Body>
    </StyledResume>
  )
}

Resume.prototypes = {
  summary: PropTypes.string.isRequired,
  experience: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      startDate: PropTypes.instanceOf(Date).isRequired,
      endDate: PropTypes.instanceOf(Date),
      description: PropTypes.arrayOf(PropTypes.string),
      skills: PropTypes.arrayOf(PropTypes.instanceOf(Skill))
    })
  ),
  education: PropTypes.shape({
    name: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    degrees: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        subject: PropTypes.string.isRequired,
        graduationDate: PropTypes.instanceOf(Date)
      })
    ),
    graduationDate: PropTypes.instanceOf(Date)
  }),
  codeExamples: PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    lastUpdated: PropTypes.instanceOf(Date).isRequired,
    languages: PropTypes.arrayOf(PropTypes.instanceOf(Skill))
  })
}

export default Resume
