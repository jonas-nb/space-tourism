import React, { useEffect, useState } from 'react'
import { api } from './api'
import moon from '../Destination/assets/image-moon.png'
import mars from '../Destination/assets/image-mars.png'
import europa from '../Destination/assets/image-europa.png'
import titan from '../Destination/assets/image-titan.png'
import './style.css'
const PageDestination = () => {
    const [selecionaID, setSelecionaID] = useState(0)
    const [image, setImage] = useState(moon)

    console.log(image)

    const callDestino = api.filter((value) => value.id === selecionaID)

    const handlerMoon = () => {
        setSelecionaID(0)
        setImage(moon)
    }
    const handlerMars = () => {
        setSelecionaID(1)
        setImage(mars)
    }
    const handlerEuropa = () => {
        setSelecionaID(2)
        setImage(europa)
    }
    const handlerTitan = () => {
        setSelecionaID(3)
        setImage(titan)
    }

    console.log(callDestino)
    return (
        <div className="w-full min-h-screen bg-destination-bg-mobile sm:bg-destination-bg-tablet xl:bg-destination-bg-desktop bg-no-repeat bg-cover text-center pt-24 ">
            <h1 className="uppercase font-barlow text-white tracking-[0.2rem] font-[200]">
                <span className="font-[600] text-[#4c4f57]">01</span> pick your
                destination
            </h1>
            <div className="m-auto w-44 mt-10 drop-shadow-md">
                <img src={image} alt="imagem do destino escolhido" />
            </div>
            <div className="font-barlow flex items-center justify-around ">
                <button
                    className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                    onClick={handlerMoon}
                >
                    moon
                </button>
                <button
                    className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                    onClick={handlerMars}
                >
                    mars
                </button>
                <button
                    className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                    onClick={handlerEuropa}
                >
                    europa
                </button>
                <button
                    className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                    onClick={handlerTitan}
                >
                    titan
                </button>
            </div>
            {/* recebe destino */}
            <div>
                {callDestino.map(
                    ({ destination, text, distance, id, travel }) => (
                        <div className="pb-16" key={id}>
                            <div>
                                <h1 className="uppercase font-bellefair text-[3rem] mt-10 text-white font-thin">
                                    {destination}
                                </h1>
                                <p className="text-slate-300 text-[0.75rem] leading-6 tracking-[0.010rem] p-9 font-barlow">
                                    {text}
                                </p>
                            </div>
                            <hr className="m-auto w-10/12" />
                            <div className="uppercase">
                                <div className="mt-7">
                                    <h3 className="font-barlow font-medium tracking-wide text-slate-500">
                                        avg. distance
                                    </h3>
                                    <h2 className="text-[1.7rem] font-semibold text-white mt-3 font-bellefair">
                                        {distance}
                                    </h2>
                                </div>
                                <div className="mt-7">
                                    <h3 className="font-barlow font-medium tracking-wide text-slate-500">
                                        est. travel time
                                    </h3>
                                    <h2 className="text-[1.7rem] font-semibold text-white mt-3 font-bellefair">
                                        {travel}
                                    </h2>
                                </div>
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>
    )
}

export default PageDestination
