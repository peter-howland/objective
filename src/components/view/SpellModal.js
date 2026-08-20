import React from 'react'
import styled from 'styled-components'

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Modal = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`

const Title = styled.h2`
  margin-top: 0;
  color: #333;
`

const Detail = styled.p`
  margin: 0.5rem 0;
  color: #555;
`

const SectionTitle = styled.h4`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #222;
`

const formatBool = (value) => (value ? 'Yes' : 'No')

export function formatParagraph(paragraph) {
  const formatTab = (text) => {
    while (text.includes('*tab')) {
      const start = text.indexOf('*tab') + 4
      const end = text.indexOf('*', start)
      const padding = text.substring(start, end)
      text = text.replace(
        `*tab${padding}*`,
        `<span style="padding-left: ${padding}px;"></span>`
      )
    }
    return text
  }

  const formatTitle = (text) => `<h3>${text.slice(7, -7).trim()}</h3>`
  const formatSubtitle = (text) => `<h4>${text.slice(3, -3).trim()}</h4>`
  const formatBold = (text) => `<strong>${text.slice(2, -2).trim()}</strong>`
  const newLine = () => `<br />`
  const formatBullets = (text) => {
    const items = text
      .trim()
      .split('/n')
      .map((line) => `<li>${line.trim()}</li>`)
      .join('')
    return `<ul>${items}</ul>`
  }

  paragraph = formatTab(paragraph)

  while (paragraph.includes('/title')) {
    const start = paragraph.indexOf('/title')
    const end = paragraph.indexOf('/title', start + 6) + 6
    const slice = paragraph.substring(start, end)
    paragraph = paragraph.replace(slice, formatTitle(slice))
  }

  while (paragraph.includes('/st')) {
    const start = paragraph.indexOf('/st')
    const end = paragraph.indexOf('/st', start + 3) + 3
    const slice = paragraph.substring(start, end)
    paragraph = paragraph.replace(slice, formatSubtitle(slice))
  }

  while (paragraph.includes('/bullets')) {
    const start = paragraph.indexOf('/bullets') + 8
    const end = paragraph.indexOf('/bullets', start)
    const bulletsText = paragraph.substring(start, end)
    paragraph = paragraph.replace('/bullets', "<div class='bullet-list'>")
    paragraph = paragraph.replace('/bullets', '</div>')
    paragraph = paragraph.replace(bulletsText, formatBullets(bulletsText))
  }

  while (paragraph.includes('/b')) {
    const start = paragraph.indexOf('/b')
    const end = paragraph.indexOf('/b', start + 2) + 2
    const slice = paragraph.substring(start, end)
    paragraph = paragraph.replace(slice, formatBold(slice))
  }

  while (paragraph.includes('/n')) {
    paragraph = paragraph.replace('/n', newLine())
  }

  return paragraph
}

const SpellModal = ({ spell, onClose }) => {
  if (!spell) return null

  return (
    <Overlay onClick={onClose}>
      <Modal onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Title>{spell.name}</Title>
        <Detail>
          <strong>Level:</strong> {spell.level}
        </Detail>
        <Detail>
          <strong>School:</strong> {spell.school}
        </Detail>
        <Detail>
          <strong>Range:</strong> {spell.range} ft
        </Detail>
        <Detail>
          <strong>Casting Time:</strong> {spell.castingTime}
        </Detail>
        <Detail>
          <strong>Duration:</strong> {spell.duration}
        </Detail>
        <Detail>
          <strong>Target:</strong> {spell.target}
        </Detail>
        <Detail>
          <strong>Damage Dice:</strong> {spell.damageDiceAmount}{' '}
          {spell.damageDice?.name}
        </Detail>
        <Detail>
          <strong>Saving Throw:</strong> {spell.savingThrow}
        </Detail>

        <SectionTitle>Description</SectionTitle>
        <Detail
          dangerouslySetInnerHTML={{
            __html: formatParagraph(spell.description)
          }}
        />

        <SectionTitle>Components</SectionTitle>
        <Detail>
          <strong>Verbal:</strong> {formatBool(spell.requiresVerbalComponent)}
        </Detail>
        <Detail>
          <strong>Somatic:</strong> {formatBool(spell.requiresSomaticComponent)}
        </Detail>
        <Detail>
          <strong>Material:</strong> {spell.materialComponent || 'None'}
        </Detail>

        <SectionTitle>Properties</SectionTitle>
        <Detail>
          <strong>Requires Attack Roll:</strong>{' '}
          {formatBool(spell.requiresAttackRoll)}
        </Detail>
        <Detail>
          <strong>Concentration:</strong> {formatBool(spell.concentration)}
        </Detail>
        <Detail>
          <strong>Ritual:</strong> {formatBool(spell.ritual)}
        </Detail>
      </Modal>
    </Overlay>
  )
}

export default SpellModal

/*

'By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, 
you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes.
 The DM chooses from the following possible omens: /bullets Weal, for good results /bt Woe, for bad results /bt Weal and woe, for both good 
 and bad results /bt Nothing, for results that aren’t especially good or bad/bullets /nThe spell doesn’t take into account any possible 
 circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion. /nIf you cast the 
 spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that 
 you get a random reading. The DM makes this roll in secret.', #description

*/
