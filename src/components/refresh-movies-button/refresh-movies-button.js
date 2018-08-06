import React from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'
import { fetchMovies } from '../../actions/movies'

const StyledRefreshMoviesButton = styled('button')({
  padding: '0.5rem',
  margin: '1rem auto',
  display: 'block'
})

export const RefreshMoviesButton = ({ fetchMovies }) => 
<StyledRefreshMoviesButton onClick={fetchMovies}>Refresh!</StyledRefreshMoviesButton>

export default connect(null, { fetchMovies })(RefreshMoviesButton)