import React, { createContext, useReducer } from "react";

export const MovieContext = createContext();

const initState = {
  recommends: null,
  newDisneys: null,
  originals: null,
  trendings: null,
}

const SET_MOVIE = 'set_movie';

export const setMovie = (payload) => {
  return {
    type: SET_MOVIE,
    payload
  }
}

const MovieReducer = (state, action) => {
  switch(action.type) {
    case SET_MOVIE:
      return {
        ...state,
        recommends: action.payload.recommends,
        newDisneys: action.payload.newDisneys,
        originals: action.payload.originals,
        trendings: action.payload.trendings,
      }
    default:
      throw new Error ('Invalid actions.')
  }
}

function MovieContextProvider({ children }) {
  const [movies, dispatch] = useReducer(MovieReducer, initState)

  return (
    <MovieContext.Provider value={[ movies, dispatch ]}>
      {children}
    </MovieContext.Provider>
  )
} 

export default MovieContextProvider