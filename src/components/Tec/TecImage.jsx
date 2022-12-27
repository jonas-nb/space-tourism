import React, { useContext, useState, useEffect } from 'react'
import { TEC_CONTEXT } from './TecContext'
import { APItechnology } from './tecAPI'

const TecImage = () => {
    let { ctrl_state, image_landscape, image_portrait } =
        useContext(TEC_CONTEXT)

    return (
        <div className="mt-5 xl:mt-0">
            <img
                className="xl:hidden w-full h-full object-cover"
                src={image_landscape}
                alt="imagem das tecnologias de voo"
            />
            <img
                className="hidden xl:block h-[24rem]  bg-cover"
                src={image_portrait}
                alt="imagem das tecnologias de voo"
            />
        </div>
    )
}

export default TecImage
