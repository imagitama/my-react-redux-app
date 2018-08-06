import React from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import { Movie } from '../movie/movie'
import { LoadingIndicator } from '../loading-indicator/loading-indicator'

const StyledMovies = styled('ul')({
  margin: 0,
  padding: 0
})

export const Movies = ({ fetching, movies }) => 
fetching ? 
  <LoadingIndicator /> :
  <StyledMovies>
    {movies.map(movie => <Movie key={movie.id} {...movie} />)}
  </StyledMovies>

export default connect(state => state.movies)(Movies)