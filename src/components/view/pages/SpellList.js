import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SpellModal from '../SpellModal'

const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`

const SortToggle = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`

const FilterSelect = styled.select`
  margin-left: 1rem;
  padding: 0.4rem;
`

const SpellList = styled.ul`
  list-style: none;
  padding: 0;
`

const SpellItem = styled.li`
  background: #f8f8f8;
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e2e2e2;
  }
`

const SpellViewer = () => {
  const [spells, setSpells] = useState([])
  const [filteredSpells, setFilteredSpells] = useState([])
  const [sortBy, setSortBy] = useState('level')
  const [filter, setFilter] = useState('')
  const [modalSpell, setModalSpell] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/allSpells')
      .then((res) => res.json())
      .then((data) => {
        const spellData = data
        setSpells(spellData)
        setFilteredSpells(spellData)
      })
  }, [])

  const handleToggleSort = () => {
    const newSort = sortBy === 'level' ? 'school' : 'level'
    setSortBy(newSort)
    setFilter('')
  }

  const uniqueOptions = Array.from(
    new Set(spells.map((spell) => spell[sortBy]).filter(Boolean))
  ).sort()

  const handleFilterChange = (e) => {
    const selected = e.target.value
    setFilter(selected)
    setFilteredSpells(
      spells.filter((spell) => String(spell[sortBy]) === selected)
    )
  }

  return (
    <Container>
      <SortToggle onClick={handleToggleSort}>
        Sort by: {sortBy === 'level' ? 'Level' : 'School'}
      </SortToggle>
      <FilterSelect onChange={handleFilterChange} value={filter}>
        <option value="">Select {sortBy}</option>
        {uniqueOptions.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </FilterSelect>

      <SpellList>
        {filteredSpells.map((spell) => (
          <SpellItem key={spell.id} onClick={() => setModalSpell(spell)}>
            {spell.name} ({spell.school}, Level {spell.level})
          </SpellItem>
        ))}
      </SpellList>

      {modalSpell && (
        <SpellModal spell={modalSpell} onClose={() => setModalSpell(null)} />
      )}
    </Container>
  )
}

export default SpellViewer
