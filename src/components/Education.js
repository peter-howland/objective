import React from "react";
import moment from "moment";
import styled from "styled-components";
import PropTypes from 'prop-types';

const StyledEducation = styled.div`
    display: grid;
    grid-template-columns: 1f;
    margin-left: 10px;
`

const DegreeList = styled.ul`
    margin-top: 0px;
`

const Education = ({school}) => {
    return (
        <StyledEducation>
            <strong>{school.name} - {school.location}</strong>
            <DegreeList>{school.degrees.map((degree, i) => (
                <li key={i}>
                    {`${degree.name} - ${degree.subject} ${degree.graduationDate ? ('- Graduated: ' + moment(degree.graduationDate).format('MMM YYYY')) : ''}`}
                    </li>))}
            </DegreeList>
        </StyledEducation>
    );
}


Education.propTypes = {
    school: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        degrees: PropTypes.arrayOf(PropTypes.shape({
            name: PropTypes.string.isRequired,
            subject: PropTypes.string.isRequired,
            graduationDate: PropTypes.instanceOf(Date)
        })),
        graduationDate: PropTypes.instanceOf(Date),
    }).isRequired
}

export default Education;