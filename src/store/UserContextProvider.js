import React, { createContext, useReducer } from "react";

export const UserContext = createContext()

const initState = {
  name: "",
  email: "",
  photoURL: "",
}

const SET_USER_LOGIN = 'set_user_login';
const SET_USER_SIGNOUT = 'set_user_signout';

export const setUserLogin = (payload) => {
  return {
    type: SET_USER_LOGIN,
    payload
  }
}

export const setUserSignOut = (payload) => {
  return {
    type: SET_USER_SIGNOUT,
    payload
  }
}

const UserReducer = (state, action) => {
  // const { name, email, photoURL } = state
  switch(action.type) {
    case SET_USER_LOGIN:
      console.log(action.payload);
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
      }
    case SET_USER_SIGNOUT:
      console.log(action);
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        photoURL: action.payload.photoURL,
      }
    default:
      throw new Error ('Invalid actions.')
  }
}

function UserContextProvider({ children }) {
  const [user, dispatch] = useReducer(UserReducer, initState)

  return (
    <UserContext.Provider value={[ user, dispatch ]}>
      {children}
    </UserContext.Provider>
  )
} 

export default UserContextProvider