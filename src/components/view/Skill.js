import styled from 'styled-components'

const StyledSkill = styled.div`
  display: inline-block;
  background: #e8edf5;
  color: #2a4d8d;
  padding: 4px 8px;
  margin: 3px;
  border-radius: 6px;
  font-size: 0.85rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);
  cursor: default;
  transition: background 0.3s ease;
  }
`
const SkillItem = styled.li`
  background-color: #dbeafe; /* light blue background */
  color: #1e40af; /* dark blue text */
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 0.9rem;
  white-space: nowrap;
`

const Skill = ({ skill }) => (
  <StyledSkill key={skill.id}>
    {skill.name} - {Math.round(skill.experience / 365)} yrs
  </StyledSkill>
)

export default Skill
