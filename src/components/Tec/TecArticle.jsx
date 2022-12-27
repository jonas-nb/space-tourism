import React, { useContext } from 'react'
import { APItechnology } from './tecAPI'
import { TEC_CONTEXT } from './TecContext'

const TecArticle = () => {
    let { ctrl_state } = useContext(TEC_CONTEXT)

    const info = APItechnology.filter((value, id) => id === ctrl_state)
    console.log(info)

    return (
        <div className="mt-5 xl:mt-16 xl:pl-5 font-medium text-[#4c4f57] text-center">
            <h2 className="uppercase font-barlow text-[#b2b2dd] text-[1rem] xl:text-left">
                the terminology ...
            </h2>
            {info.map(({ name, description }, id) => (
                <div
                    className="sm:flex sm:flex-col sm:items-center xl:items-start"
                    key={id}
                >
                    <h1 className="uppercase font-bellefair text-[#d1d1d1] text-[2rem] xl:text-[3rem] mt-3 xl:mt-5">
                        {name}
                    </h1>
                    <p className="font-barlow p-5 xl:p-0 text-[#b2b2dd] text-[0.1rem] xl:text-[1.2rem] sm:w-6/12 xl:w-10/12 xl:mt-5 xl:leading-7 xl:text-left">
                        {description}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default TecArticle
