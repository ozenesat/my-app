// import react from 'react'
// import Button from 'react-bootstrap/Button'
import styled from 'styled-components'
// Code Along: Replace with styled components button
const Button = styled.button`
  border-color: rgba(0,212,255,1);
  border-width: 7px;
  border-radius: 30px;

  background-color: rgba(1,101,156,1);
  color: white;

  font-size: 1rem;
  padding: 0.5rem 1rem;

  transition: color .7s linear, background-color .7s linear;

  &:hover {
    background-color: transparent ;
    border-color: rgba(1,101,156,1);
    color: yellow;
    transition: color .7s linear, background-color .7s linear;
  }
`

export default Button
