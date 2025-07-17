import React, { useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

const AbstractBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  background: #f0f4f8;

  div {
    position: absolute;
    border-radius: 40% 60% 70% 30% / 30% 50% 50% 70%;
    filter: blur(60px);
    opacity: 0.3;
    transform-origin: center;
  }

  /* Default shape sets */

  /* Variant 1 */
  &.variant1 .shape1 {
    width: 300px;
    height: 300px;
    background: #2a4d8d;
    top: 10%;
    left: 5%;
    clip-path: polygon(0% 0%, 100% 0%, 70% 100%, 0% 100%);
    transform: rotate(15deg);
  }
  &.variant1 .shape2 {
    width: 350px;
    height: 350px;
    background: #4f6d9c;
    top: 30%;
    right: 10%;
    clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
    transform: rotate(-25deg);
  }
  &.variant1 .shape3 {
    width: 250px;
    height: 250px;
    background: #d9e4f5;
    bottom: 5%;
    left: 15%;
    clip-path: polygon(0% 50%, 50% 0%, 100% 50%, 50% 100%);
    transform: rotate(10deg);
  }

  /* Variant 2 */
  &.variant2 .shape1 {
    width: 400px;
    height: 200px;
    background: #234170;
    top: 5%;
    left: 10%;
    clip-path: ellipse(50% 70% at 50% 50%);
    transform: rotate(20deg);
  }
  &.variant2 .shape2 {
    width: 300px;
    height: 300px;
    background: #2a4d8d;
    top: 40%;
    right: 15%;
    clip-path: polygon(20% 0%, 100% 20%, 80% 100%, 0% 80%);
    transform: rotate(-30deg);
  }
  &.variant2 .shape3 {
    width: 200px;
    height: 250px;
    background: #4f6d9c;
    bottom: 10%;
    left: 25%;
    clip-path: circle(50% at 50% 50%);
    transform: rotate(0deg);
  }

  /* Variant 3 */
  &.variant3 .shape1 {
    width: 350px;
    height: 350px;
    background: #1e386b;
    top: 20%;
    left: 20%;
    clip-path: polygon(0% 0%, 100% 50%, 0% 100%);
    transform: rotate(-10deg);
  }
  &.variant3 .shape2 {
    width: 300px;
    height: 300px;
    background: #2a4d8d;
    top: 50%;
    right: 20%;
    clip-path: ellipse(60% 40% at 50% 50%);
    transform: rotate(25deg);
  }
  &.variant3 .shape3 {
    width: 250px;
    height: 200px;
    background: #4f6d9c;
    bottom: 20%;
    left: 30%;
    clip-path: polygon(50% 0%, 100% 100%, 0% 100%);
    transform: rotate(15deg);
  }
`

export default function BackgroundShapes() {
  const variants = ['variant1', 'variant2', 'variant3']
  const [chosenVariant, setChosenVariant] = useState('variant1')

  useEffect(() => {
    const randomVariant = variants[Math.floor(Math.random() * variants.length)]
    setChosenVariant(randomVariant)
  }, [])

  return (
    <AbstractBackground className={chosenVariant}>
      <div className="shape1" />
      <div className="shape2" />
      <div className="shape3" />
    </AbstractBackground>
  )
}
