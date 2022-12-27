import React, { useContext, useState } from 'react'
import { MY_CONTEXT } from './CrewContext'
import anousheh from './assets/image-anousheh-ansari.png'
import victor from './assets/image-victor-glover.png'
import mark from './assets/image-mark-shuttleworth.png'
import douglas from './assets/image-douglas-hurley.png'
import './buttons.css'

const CrewButtons = () => {
    let { crewState, setCrewState, setCrewImage, crewImage } =
        useContext(MY_CONTEXT)

    console.log(crewState, crewImage)
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
        <div className="hidden xl:flex xl:w-36 xl:h-10 xl:fixed xl:bottom-1 justify-around">
            <button
                className={crewState === 0 ? 'crewBtn bg-white' : 'crewBtn'}
                onClick={handlerZero}
            ></button>
            <button className="crewBtn" onClick={handlerFirst}></button>
            <button className="crewBtn" onClick={handlerSecond}></button>
            <button className="crewBtn" onClick={handleThird}></button>
        </div>
    )
}

export default CrewButtons
