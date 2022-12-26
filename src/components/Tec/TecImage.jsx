import React, { useContext, useState, useEffect } from 'react'
import { TEC_CONTEXT } from './TecContext'
import { APItechnology } from './tecAPI'

const TecImage = () => {
    let { ctrl_state, image_landscape, image_portrait } =
        useContext(TEC_CONTEXT)

    return (
        <div>
            <img
                className="border border-red-600 w-full h-10 xl:hidden"
                src={image_landscape}
                alt="imagem das tecnologias de voo"
            />
            <img
                className="border border-red-600 w-full h-10 hidden xl:block"
                src={image_portrait}
                alt="imagem das tecnologias de voo"
            />
        </div>
    )
}

export default TecImage
