"use client"
import { createContext, useReducer } from "react";

export const TransitionContext = createContext()

export function transitionReducer (state, action) {
  switch(action.type) {
    case 'ON':
      return {activateTransition: true}

    case 'OFF':
      return {activateTransition: false}
    
    default:
      return state
  }
}

export default function TransitionContextProvider ({children}) {
  const [state, dispatch] = useReducer(transitionReducer, { activateTransition: false })

  return (
    <TransitionContext.Provider value={{...state, dispatch}}>
      {children}
    </TransitionContext.Provider>
  )
}