import React, { useEffect, useState } from 'react'
import { api } from './api'
import moon from '../Destination/assets/image-moon.png'
import mars from '../Destination/assets/image-mars.png'
import europa from '../Destination/assets/image-europa.png'
import titan from '../Destination/assets/image-titan.png'

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
        <div className="w-full min-h-screen bg-destination-bg-mobile sm:bg-destination-bg-tablet xl:bg-destination-bg-desktop bg-no-repeat text-center pt-24 uppercase">
            <h1 className="font-barlow text-white tracking-[0.2rem] font-[200]">
                <span className="font-[600] text-[#4c4f57]">01</span> pick your
                destination
            </h1>
            <div>
                <img src={image} alt="" />
            </div>
            <nav>
                <button onClick={handlerMoon}>moon</button>
                <button onClick={handlerMars}>mars</button>
                <button onClick={handlerEuropa}>europa</button>
                <button onClick={handlerTitan}>titan</button>
            </nav>
            {/* recebe destino */}
            <div>
                {callDestino.map(
                    ({ destination, text, distance, id, travel }) => (
                        <div key={id}>
                            <div>
                                <h1>{destination}</h1>
                                <p>{text}</p>
                            </div>
                            <div>
                                <div>
                                    <h3>avg. distance</h3>
                                    <h2>{distance}</h2>
                                </div>
                                <div>
                                    <h3>est. travel time</h3>
                                    <h2>{travel}</h2>
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
