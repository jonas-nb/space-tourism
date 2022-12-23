import React, { useContext, useState } from 'react'
import { MY_CONTEXT } from './CrewContext'
import './buttons.css'
import anousheh from './assets/image-anousheh-ansari.png'
import victor from './assets/image-victor-glover.png'
import mark from './assets/image-mark-shuttleworth.png'
import douglas from './assets/image-douglas-hurley.png'

const CrewCarousel = () => {
    let { crewState, setCrewState } = useContext(MY_CONTEXT)
    let [crewImage, setCrewImage] = useState(douglas)

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
        <div className="w-full mt-7">
            <div className="m-auto w-11/12 h-full border-b">
                <img
                    className="m-auto w-44"
                    src={crewImage}
                    alt="imagem de uma pessoa com a vestimenta própria do cargo"
                />
            </div>
            <div className="m-auto mt-5 w-36 flex justify-around">
                <button
                    className={crewState === 0 ? 'crewBtn bg-white' : 'crewBtn'}
                    onClick={handlerZero}
                ></button>
                <button className="crewBtn" onClick={handlerFirst}></button>
                <button className="crewBtn" onClick={handlerSecond}></button>
                <button className="crewBtn" onClick={handleThird}></button>
            </div>
        </div>
    )
}

export default CrewCarousel
