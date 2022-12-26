import React from 'react'
import TecArticle from './TecArticle'
import { TEC_PROVIDER } from './TecContext'
import TecController from './TecController'
import TecImage from './TecImage'
import TecTitle from './TecTitle'

const TecIndex = () => {
    return (
        <div className="w-full min-h-screen bg-tec-bg-mobile sm:bg-tec-bg-tablet xl:bg-tec-bg-desktop bg-cover flex flex-col items-center pt-28">
            <TEC_PROVIDER>
                <TecTitle />
                <div>
                    <TecImage />
                    <TecController />
                    <TecArticle />
                </div>
            </TEC_PROVIDER>
        </div>
    )
}

export default TecIndex
