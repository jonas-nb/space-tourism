import React from 'react'
import CrewArticle from './CrewArticle'
import CrewCarousel from './CrewCarousel'
import { MY_PROVIDER } from './CrewContext'
import CrewTitle from './CrewTitle'

const CrewIndex = () => {
    return (
        <div className="w-full h-full min-h-screen bg-crew-bg-mobile sm:bg-crew-bg-tablet xl:bg-crew-bg-desktop bg-cover flex flex-col items-center">
            <MY_PROVIDER>
                <CrewTitle />
                <CrewCarousel />
                <CrewArticle />
            </MY_PROVIDER>
        </div>
    )
}

export default CrewIndex
