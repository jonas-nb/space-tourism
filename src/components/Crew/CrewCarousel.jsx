import React, { useContext, useState } from 'react'
import { MY_CONTEXT } from './CrewContext'
import './buttons.css'
import anousheh from './assets/image-anousheh-ansari.png'
import victor from './assets/image-victor-glover.png'
import mark from './assets/image-mark-shuttleworth.png'
import douglas from './assets/image-douglas-hurley.png'

const CrewCarousel = () => {
    let {
        crewState,
        crewImage,
        handlerZero,
        handlerFirst,
        handlerSecond,
        handleThird,
    } = useContext(MY_CONTEXT)

    console.log(crewImage)

    return (
        <div className="w-full mt-7 md:mt-0 md:flex md:flex-col-reverse xl:flex xl:flex-row-reverse xl:justify-around">
            <div className="m-auto xl:m-0 md:mt-12 xl:mt-0 w-11/12 xl:w-96 border-b md:border-b-transparent">
                <img
                    className="m-auto w-44 md:w-72 xl:w-96 "
                    src={crewImage}
                    alt="imagem de uma pessoa com a vestimenta própria do cargo"
                />
            </div>
            <div className="xl:hidden m-auto mt-5 w-36 flex justify-around">
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
