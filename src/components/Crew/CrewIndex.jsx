import React from 'react'
import CrewArticle from './CrewArticle'
import CrewCarousel from './CrewCarousel'
import { MY_PROVIDER } from './CrewContext'
import CrewTitle from './CrewTitle'

const CrewIndex = () => {
    return (
        <div className="w-full h-full min-h-screen bg-crew-bg-mobile sm:bg-crew-bg-tablet xl:bg-crew-bg-desktop bg-cover flex md:block flex-col items-center border-t border-transparent">
            <MY_PROVIDER>
                <CrewTitle />
                <div className="md:flex md:flex-col-reverse xl:flex-row-reverse xl:items-center xl:justify-center ">
                    <CrewCarousel />
                    <CrewArticle />
                </div>
            </MY_PROVIDER>
        </div>
    )
}

export default CrewIndex
