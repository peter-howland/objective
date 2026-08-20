import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { fetchCharacterList } from '../service'
import Spinner from '../components/Spinner'

const Container = styled.div`
  padding: 2rem;
  font-family: Arial, sans-serif;
`
const Characters = styled.ul`
  list-style: none;
  padding: 0;
`
const NewCharacterBtn = styled.button`
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
const CharacterItem = styled.li`
  background: #f8f8f8;
  margin-bottom: 0.5rem;
  padding: 0.8rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #e2e2e2;
  }
`

const CharacterList = () => {
  let navigate = useNavigate()
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const loadCharacters = async () => {
      try {
        const data = await fetchCharacterList()
        setCharacters(data)
      } catch (err) {
        console.log('loadCharacters failed', err)
      }
    }
    loadCharacters()
  }, [])

  const handleNewCharacterClick = () => {
    navigate(`character/create`)
  }

  return (
    <Container>
      {characters === null ? (
        <Spinner />
      ) : (
        <>
          {characters && (
            <Characters>
              {characters.map((character) => (
                <CharacterItem
                  key={character.id}
                  href={'/character/' + character.id}>
                  {`${character.name} -- Level ${character.level} ${character.race} ${character.class}`}
                </CharacterItem>
              ))}
            </Characters>
          )}
          <NewCharacterBtn onClick={handleNewCharacterClick}>
            Create New Character
          </NewCharacterBtn>
        </>
      )}
    </Container>
  )
}

export default CharacterList
