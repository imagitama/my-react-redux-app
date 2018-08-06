import React from 'react'
import { connect } from 'react-redux'
import { Movie } from '../movie/movie'
import { LoadingIndicator } from '../loading-indicator/loading-indicator';

export const Movies = connect(state => state.movies)(({ fetching, movies }) => 
  fetching ? 
    <LoadingIndicator /> :
    <ul>
      {movies.map(movie => <Movie key={movie.id} {...movie} />)}
    </ul>
)