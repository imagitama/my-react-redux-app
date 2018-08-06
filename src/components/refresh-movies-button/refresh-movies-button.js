import React from 'react'
import { connect } from 'react-redux'
import { fetchMovies } from '../../actions/movies'

export const RefreshMoviesButton = connect(null, { fetchMovies })(({ fetchMovies }) => 
  <button onClick={fetchMovies}>Refresh!</button>
)