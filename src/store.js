import { createStore, combineReducers } from 'redux'
import { moviesReducer } from './reducers/movies'

export const store = createStore(combineReducers({ movies: moviesReducer }))