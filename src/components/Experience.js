import React from "react";
import moment from "moment";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Skill from "./Skill";

const StyledExperience = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 10px;
    .name: {
        font-size: 12px;
    }
    .title: {
        font-size: 12px;
    }
`

const CompanyName = styled.strong`
    font-size: 20px;
`

const EmploymentDates = styled.strong`
    justify-items: end;
`
const JobTitle = styled.strong`
    padding-left: 5px;
` 

const Experience = ({job}) => {
    return (
        <StyledExperience>
            <CompanyName >{job.companyName}</CompanyName>
            <EmploymentDates>{moment(job.startDate).format('MMM YYYY')} - {moment(job.endDate).format('MMM YYYY')}</EmploymentDates>
            <JobTitle>{job.title}</JobTitle>
            <div />
            <div>
                <ul>
                    {job.description.map(text => <li>{text}</li>)}
                </ul>
            </div>
        </StyledExperience>
    );
}

Experience.propTypes = {
    job: PropTypes.shape({
        title: PropTypes.string.isRequired,
        startDate: PropTypes.instanceOf(Date).isRequired,
        endDate: PropTypes.instanceOf(Date),
        description: PropTypes.arrayOf(PropTypes.string),
        skills: PropTypes.arrayOf(PropTypes.instanceOf(Skill)),
    })
}
export default Experience;