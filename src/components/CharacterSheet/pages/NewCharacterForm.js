import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { fetchRaceList, fetchClassList } from '../service'
import Spinner from '../components/Spinner'

const Form = styled.form`
  display: grid;
  gap: 1rem;
`

const Label = styled.label`
  font-weight: bold;
`

const Input = styled.input`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`

const Select = styled.select`
  padding: 0.5rem;
  border-radius: 6px;
  border: 1px solid #ccc;
`

const Button = styled.button`
  background-color: #0077cc;
  color: white;
  padding: 0.75rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #005fa3;
  }
`

export default function NewCharacterForm() {
  const [raceOptions, setRaceOptions] = useState([])
  const [subRaceOptions, setSubRaceOptions] = useState([])
  const [classOptions, setClassOptions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    race: '',
    subrace: '',
    class: '',
    background: '',
    alignment: ''
  })

  useEffect(() => {
    const loadOptions = async () => {
      try {
        const [races, classes] = await Promise.all([
          fetchRaceList(),
          fetchClassList()
        ])
        setRaceOptions(races)
        setClassOptions(classes)
        setLoading(false)
      } catch (err) {
        setError('Failed to load options')
        console.error(err)
      }
    }

    loadOptions()
  }, [])

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleRaceChange = (e) => {
    const selectedRaceId = e.target.value

    setFormData((prev) => ({
      ...prev,
      race: selectedRaceId,
      subrace: ''
    }))

    const selectedRace = raceOptions.find((r) => r.id == selectedRaceId)

    if (selectedRace && selectedRace.availableSubRaces) {
      setSubRaceOptions(selectedRace.availableSubRaces)
    } else {
      setSubRaceOptions([])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Creating character:', formData)
    // TODO: send POST request to backend
  }

  return (
    <>
      {loading && <Spinner />}
      {!loading && (
        <Form onSubmit={handleSubmit}>
          <div>
            <Label>Name</Label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <Label>Race</Label>
            <Select
              name="race"
              value={formData.race}
              onChange={handleRaceChange}
              required>
              <option value="">Select a race</option>
              {raceOptions.map((race) => (
                <option key={race.id} value={race.id}>
                  {race.name}
                </option>
              ))}
            </Select>
          </div>
          {formData.race && (
            <div>
              <Label>Subrace</Label>
              <Select
                name="subrace"
                value={formData.subRaceOptions}
                onChange={handleChange}
                required>
                <option value="">Select a subrace</option>
                {subRaceOptions.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name}
                  </option>
                ))}
              </Select>
            </div>
          )}

          <div>
            <Label>Class</Label>
            <Select
              name="class"
              value={formData.class}
              onChange={handleChange}
              required>
              <option value="">Select a class</option>
              {classOptions.map((cls) => (
                <option key={cls.id} value={cls.id}>
                  {cls.name}
                </option>
              ))}
            </Select>
          </div>

          <div>
            <Label>Background</Label>
            <Input
              name="background"
              value={formData.background}
              onChange={handleChange}
            />
          </div>

          {/* <div>
        <Label>Alignment</Label>
        <Select
          name="alignment"
          value={formData.alignment}
          onChange={handleChange}>
          <option value="">Select alignment</option>
          <option value="LG">Lawful Good</option>
          <option value="CG">Chaotic Good</option>
          <option value="N">Neutral</option>
          <option value="LE">Lawful Evil</option>
        </Select>
      </div> */}

          <Button type="submit">Create Character</Button>
        </Form>
      )}
    </>
  )
}
