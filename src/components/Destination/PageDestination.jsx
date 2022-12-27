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
        setImage(europa)
    }
    const handlerEuropa = () => {
        setSelecionaID(2)
        setImage(mars)
    }
    const handlerTitan = () => {
        setSelecionaID(3)
        setImage(titan)
    }

    console.log(callDestino)
    return (
        <div className="w-full min-h-screen bg-destination-bg-mobile sm:bg-destination-bg-tablet xl:bg-destination-bg-desktop bg-no-repeat bg-cover text-center pt-24 ">
            <h1 className="uppercase font-barlow text-white tracking-[0.2rem] font-[200] sm:text-left sm:mt-16 sm:ml-10 xl:ml-16 xl:text-[1.2rem] sm:text-[1.5rem]">
                <span className="font-[600] text-[#4c4f57] ">01</span> pick your
                destination
            </h1>
            <div className="xl:flex xl:items-center xl:justify-around">
                <div className="m-auto w-44 sm:w-64 xl:w-[26rem] mt-10 drop-shadow-md">
                    <img src={image} alt="imagem do destino escolhido" />
                </div>
                <div className=" xl:w-[26rem] xl:m-auto xl:flex xl:flex-col xl:items-start">
                    {/* menu */}
                    <div className="font-barlow flex items-center justify-around xl:justify-start sm:m-auto xl:m-0 sm:w-6/12 xl:w-full sm:mt-10">
                        <button
                            className={
                                selecionaID === 0
                                    ? 'MyBtn border-b-2 border-slate-50'
                                    : 'MyBtn border-b-2 border-transparent hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50'
                            }
                            onClick={handlerMoon}
                        >
                            moon
                        </button>
                        <button
                            className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                            onClick={handlerMars}
                        >
                            europa
                        </button>
                        <button
                            className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                            onClick={handlerEuropa}
                        >
                            mars
                        </button>
                        <button
                            className="MyBtn hover:border-b-2 focus:border-b-2 hover:border-slate-500 focus:border-slate-50"
                            onClick={handlerTitan}
                        >
                            titan
                        </button>
                    </div>
                    {/* article */}
                    <div className="">
                        {callDestino.map(
                            ({ destination, text, distance, id, travel }) => (
                                <div
                                    className="pb-16 xl:pb-0 xl:pt-5 xl:text-start xl:flex xl:flex-col xl:h-full"
                                    key={id}
                                >
                                    <div>
                                        <h1 className="uppercase font-bellefair text-[3rem] sm:text-[6rem] mt-10 sm:mt-16  text-white font-thin">
                                            {destination}
                                        </h1>
                                        <p className="text-slate-300 text-[0.75rem] leading-6 sm:leading-9 tracking-[0.010rem] xl:mt-5 p-10 sm:p-20 xl:p-0 xl:w-96 sm:text-[1.2rem] font-barlow">
                                            {text}
                                        </p>
                                    </div>
                                    <hr className="m-auto xl:m-0 xl:mt-2 w-10/12" />
                                    <div className="uppercase sm:flex sm:justify-around xl:justify-start xl:gap-10 sm:m-auto xl:m-0 sm:w-10/12 xl:w-full">
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

                {/* recebe destino */}
            </div>
        </div>
    )
}

export default PageDestination
