import React from 'react'
import styled from 'react-emotion'

const StyledMovie = styled('li')({
  listStyle: 'none',
  padding: '0.5rem',
  borderTop: '1px solid grey',
  ':first-child': {
    borderTop: 'none'
  }
})

export const Movie = ({ title, releaseYear }) => 
  <StyledMovie>
    {title} ({releaseYear})
  </StyledMovie>