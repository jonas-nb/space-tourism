import React, { useState, createContext } from 'react'
import douglas from './assets/image-douglas-hurley.png'
import anousheh from './assets/image-anousheh-ansari.png'
import victor from './assets/image-victor-glover.png'
import mark from './assets/image-mark-shuttleworth.png'

export const MY_CONTEXT = createContext()

export const MY_PROVIDER = ({ children }) => {
    const [crewState, setCrewState] = useState(0)
    const [crewImage, setCrewImage] = useState(douglas)

    function handlerZero() {
        setCrewState(0)
        setCrewImage(douglas)
    }
    function handlerFirst() {
        setCrewState(1)
        setCrewImage(mark)
    }
    function handlerSecond() {
        setCrewState(2)
        setCrewImage(victor)
    }
    function handleThird() {
        setCrewState(3)
        setCrewImage(anousheh)
    }

    return (
        <MY_CONTEXT.Provider
            value={{
                crewState,
                setCrewState,
                crewImage,
                setCrewImage,
                handlerZero,
                handlerSecond,
                handlerFirst,
                handleThird,
            }}
        >
            {children}
        </MY_CONTEXT.Provider>
    )
}
