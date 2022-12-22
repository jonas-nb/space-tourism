import React, { useState, createContext } from 'react'

export const MY_CONTEXT = createContext()

export const MY_PROVIDER = ({ children }) => {
    const [crewState, setCrewState] = useState(0)
    return (
        <MY_CONTEXT.Provider value={{ crewState, setCrewState }}>
            {children}
        </MY_CONTEXT.Provider>
    )
}
