import React from "react";
import moment from "moment";
import styled from "styled-components";
import PropTypes from 'prop-types';
import Skill from "./Skill";

const StyledExample = styled.div`
    display: grid;
    grid-template-columns: 1f;
    margin-bottom: 5px;
`

const CodeExample = ({project}) => {
    return (
        <StyledExample>
            <a href={project.link}>{project.name}</a>
            <div>{`Last Updated: ${moment(project.lastUpdated).format('MMM YYYY')}`}</div>
            <p>{project.description}</p>
        </StyledExample>
    )
}

CodeExample.propTypes = {
    project: PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        lastUpdated: PropTypes.instanceOf(Date).isRequired,
        languages: PropTypes.arrayOf(PropTypes.instanceOf(Skill))
    })
}

export default CodeExample;