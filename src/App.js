import React from 'react'
import { Movies } from './components/movies/movies'
import { RefreshMoviesButton } from './components/refresh-movies-button/refresh-movies-button'

export const App = () =>
  <div>
    <Movies />
    <RefreshMoviesButton />
  </div>