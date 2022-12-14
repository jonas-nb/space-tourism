import React, { useContext, useState } from 'react'
import { MY_CONTEXT } from './CrewContext'
import './buttons.css'

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
        <div className="w-full mt-7 md:mt-3 md:flex md:flex-col-reverse xl:flex xl:flex-row-reverse xl:justify-around">
            <div className="m-auto xl:m-0 md:mt-0 xl:mt-0 w-11/12 xl:w-96 border-b md:border-b-transparent">
                <img
                    className="m-auto w-44 md:mt-10 md:w-72 xl:w-72 "
                    src={crewImage}
                    alt="imagem de uma pessoa com a vestimenta própria do cargo"
                />
            </div>
            <div className="xl:hidden m-auto mt-5 md:mt-0 w-36 flex justify-around">
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
