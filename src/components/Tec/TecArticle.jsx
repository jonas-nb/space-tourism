import React, { useContext } from 'react'
import { APItechnology } from './tecAPI'
import { TEC_CONTEXT } from './TecContext'

const TecArticle = () => {
    let { ctrl_state } = useContext(TEC_CONTEXT)

    const info = APItechnology.filter((value, id) => id === ctrl_state)
    console.log(info)

    return (
        <div className="mt-5 font-medium text-[#4c4f57] text-center">
            <h2 className="uppercase font-barlow text-[#6d6f74] text-[1rem]">
                the terminology ...
            </h2>
            {info.map(({ name, description }, id) => (
                <div className="sm:flex sm:flex-col sm:items-center" key={id}>
                    <h1 className="uppercase font-bellefair text-[#d1d1d1] text-[2rem] mt-3">
                        {name}
                    </h1>
                    <p className="font-barlow p-5 text-[#b2b2dd] text-[0.1rem] sm:w-6/12">
                        {description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TecArticle
