import styled from 'styled-components';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Skill from './Skill';
import Experience from './Experience';
import Education from './Education';
import CodeExample from './CodeExample';

const StyledResume = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    color: white;  
    font-size: 12px;
`

const Header = styled.div`
    h1, h2 {
        text-align: center;
        margin: 0;
    }
`

const Body = styled.div`
    margin: 25px;
    padding: 25px;
    background-color: #34569b9c;
    min-height: 100vh; 
    p{
        margin: 0;
    }
`;
const GridWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr) ;
    grid-gap: 10px;
    margin: 10px; 10px;
`
Date.daysBetween = ( date1, date2 ) => {
    let one_day=1000*60*60*24;
    let date1_ms = date1.getTime();
    let date2_ms = date2.getTime();
    let difference_ms = date2_ms - date1_ms;
      
    return Math.round(difference_ms/one_day); 
  }

const Resume = ({ summary, experience, education, codeExamples }) => {

    const [skills, setSkills] = useState([]);
    const [primaryLanguages, setPrimaryLanguages] = useState([]);
    const [secondaryLanguages, setSecondaryLanguages] = useState([]);
    const [datbases, setDatabases] = useState([]);
    const [librariesAndFrameworksJavascript, setLibrariesAndFrameworksJavascript] = useState([]);
    const [librariesAndFrameworksJava, setLibrariesAndFrameworksJava] = useState([]);
    const [buildTools, setBuildTools] = useState([]);
    const [sourceControl, setSourceControl] = useState([]);
    const [lifecycleManagement, setLifecycleManagement ] = useState([]);
    const [devEnvironment, setDevEnvironment] = useState([]);
    const [continuousIntegration, setContinuousIntegration ] = useState([]);
    const [serverDeployment, setServerDeployment] = useState([]);
    const [operatingSystem, setOperatingSystem ] = useState([]);
    const [other, setOther] = useState([]);

    const comparator = (a, b) => b.experience - a.experience;
    useEffect(() => {
        const accum = {};
        experience.forEach((job) => {
            const totalExperience = Date.daysBetween(job.startDate, job.endDate);
            job.skills.forEach((s) => {
                const skill = accum[s.id];
                if(skill){
                skill.experience += totalExperience; 
                }else{
                    accum[s.id] = s;
                    accum[s.id].experience = totalExperience;
                }
            })
        });
        setSkills(Object.values(accum));
    }, [experience]);

    useEffect(() => {
        const primeLang = [];
        const secLang = [];
        const db = [];
        const libAndFrameJavascript = [];
        const libAndFrameJava = [];
        const build = [];
        const source = [];
        const alm = [];
        const ide = [];
        const cicd = [];
        const server = [];
        const os = [];
        const misc = [];

        if(skills.length > 0){
            skills.sort(comparator);
            skills.forEach((skill) => {
                switch(skill.type){
                    case 'primaryLanguage': 
                        primeLang.push(skill);
                        break;
                    case 'secondaryLanguage':
                        secLang.push(skill);
                        break;
                    case 'database':
                        db.push(skill);
                        break
                    case 'library_framework_javascript':
                        libAndFrameJavascript.push(skill);
                        break;
                    case 'library_framework_java':
                        libAndFrameJava.push(skill);
                        break;
                    case 'build_tool': 
                        build.push(skill);
                        break;
                    case 'source_control':
                        source.push(skill);
                        break;
                    case 'alm':
                        alm.push(skill);
                        break
                    case 'ide':
                        ide.push(skill);
                        break;
                    case 'cicd':
                        cicd.push(skill);
                        break;
                    case 'servers':
                        server.push(skill);
                        break
                    case 'os':
                        os.push(skill);
                        break;
                    case 'other':
                        misc.push(skill);
                        break;
                    default:
                        break;
                }
            });
            setPrimaryLanguages(primeLang);
            setSecondaryLanguages(secLang);
            setDatabases(db);
            setLibrariesAndFrameworksJavascript(libAndFrameJavascript);
            setLibrariesAndFrameworksJava(libAndFrameJava);
            setBuildTools(build);
            setSourceControl(source);
            setLifecycleManagement(alm);
            setDevEnvironment(ide);
            setContinuousIntegration(cicd);
            setServerDeployment(server);
            setOperatingSystem(os);
            setOther(misc);
        }
    }, [skills]);

    return (
        <StyledResume>
            <Header>
                <h1> Peter V. Howland </h1>
                <h2> Software Engineer </h2>
            </Header>
            <Body>
                <div>
                    <strong> Summary: </strong><p> {summary} </p>
                </div>
                <h3> Key Competencies </h3>
                <strong>Languages</strong>
                <GridWrapper>
                    <div>
                        <strong> Primary</strong>
                        { primaryLanguages && primaryLanguages.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>Secondary Languages</strong>
                        { secondaryLanguages && secondaryLanguages.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>Databases</strong>
                        { datbases && datbases.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                </GridWrapper>
                <strong>Libraries & Frameworks</strong>
                <GridWrapper>
                    <div>
                        <strong>Javascript</strong>
                        { librariesAndFrameworksJavascript && librariesAndFrameworksJavascript.map((skill) => {
                            return (<Skill skill={skill} />)
                        })} 
                    </div>
                    <div>
                        <strong>Java</strong>
                        { librariesAndFrameworksJava && librariesAndFrameworksJava.map((skill) => {
                            return (<Skill skill={skill} />)
                        })} 
                    </div>
                </GridWrapper>
                <strong>Software and Tools</strong>
                <GridWrapper>
                    <div>
                        <strong> Build Tools</strong>
                        { buildTools && buildTools.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>Source Control</strong>
                        { sourceControl && sourceControl.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>ALM Software</strong>
                        { lifecycleManagement && lifecycleManagement.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>IDEs</strong>
                        { devEnvironment && devEnvironment.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>CI/CD Tools</strong>
                        { continuousIntegration && continuousIntegration.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>Server & Deployment Tools</strong>
                        { serverDeployment && serverDeployment.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>Operating Systems</strong>
                        { operatingSystem && operatingSystem.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                    <div>
                        <strong>Other</strong>
                        { other && other.map((skill) => {
                            return (<Skill skill={skill} />)
                        }) }
                    </div>
                </GridWrapper>
                <h3>Professional Experience</h3>
                    {experience && experience.map((job) => {
                        return (<Experience job={job}/>)
                    })}
                <h3>Education</h3>
                    {education && education.map((school) => {
                        return (<Education  school={school}/>)
                    })}
                <h3>Code Examples</h3>
                    {codeExamples && codeExamples.map((project) => {
                        return (<CodeExample  project={project}/>)
                    })}
            </Body>
        </StyledResume>
    )
}

Resume.prototypes = {
    summary: PropTypes.string.isRequired,
    experience: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date),
        description: PropTypes.arrayOf(PropTypes.string),
        skills: PropTypes.arrayOf(PropTypes.instanceOf(Skill)),
    })),
    education: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        degrees: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            graduationDate: PropTypes.instanceOf(Date)
        })),
        graduationDate: PropTypes.instanceOf(Date),
    }),
    codeExamples: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        lastUpdated: PropTypes.instanceOf(Date).isRequired,
        languages: PropTypes.arrayOf(PropTypes.instanceOf(Skill))
    })

}

export default Resume;