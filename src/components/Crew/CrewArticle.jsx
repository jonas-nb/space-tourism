import React, { useContext } from 'react'
import api from '../../starter-code/data.json'
import CrewButtons from './CrewButtons'
import { MY_CONTEXT } from './CrewContext'

console.log(api.crew)
const CrewArticle = () => {
    let { crewState } = useContext(MY_CONTEXT)
    console.log(crewState)
    const information = api.crew.filter((value, id) => id === crewState)
    console.log(information)
    return (
        <div className="xl:w-11/12  xl:ml-44 xl:h-96 xl:flex xl:flex-col">
            {information.map(({ name, bio, role }) => (
                <div className=" md:mb-0 h-[25rem] md:h-48">
                    <h2 className="mt-10 md:mt-14 xl:mt-10 uppercase text-center xl:text-left text-[#6d6f74] font-bellefair text-[1rem] md:text-[1.5rem] xl:text-[2rem]">
                        {role}
                    </h2>
                    <h1 className="uppercase text-center xl:text-left text-[#d1d1d1] font-bellefair text-[1.2rem] md:text-[2rem] xl:text-[3rem] mt-2 md:mt-5 xl:mt-8">
                        {name}
                    </h1>
                    <p className="xl:h-48 xl:leading-8 xl:tracking-wide m-auto xl:m-0 text-center xl:text-left font-barlow mt-5 xl:mt-10 w-10/12 xl:text-[1.7rem] md:w-6/12 xl:w-10/12 text-[#b2b2dd] font-[500] md:font-light">
                        {bio}
                    </p>
                </div>
            ))}
            <CrewButtons />
        </div>
    )
}

export default CrewArticle
