const hostUrl = 'http://localhost:8080'

const get = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`Failed fetch: ${res.status}`)
    const data = await res.json()
    return data
  } catch (error) {
    console.error('GET error:', error.message)
    throw error
  }
}

export const fetchCharacterList = async () => {
  return await get(`${hostUrl}/character-list/`)
}

export const fetchCharacter = async (characterId) => {
  return await get(`${hostUrl}/${characterId}`)
}

export const fetchRaceList = async () => {
  return await get(`${hostUrl}/race/list`)
}

export const fetchSubRaceList = async () => {
  return await get(`${hostUrl}/race/list`)
}

export const fetchClassList = async () => {
  return await get(`${hostUrl}/class/list`)
}

export const fetchSpellList = async () => {
  return await get(`${hostUrl}/spells/list`)
}

export const createNewCharacter = (character) => {}
