import React from 'react'
import TecArticle from './TecArticle'
import { TEC_PROVIDER } from './TecContext'
import TecController from './TecController'
import TecImage from './TecImage'
import TecTitle from './TecTitle'

const TecIndex = () => {
    return (
        <div className="w-full min-h-screen bg-tec-bg-mobile sm:bg-tec-bg-tablet xl:bg-tec-bg-desktop bg-cover flex sm:block flex-col  items-center pt-28">
            <TEC_PROVIDER>
                <TecTitle />
                <div className="w-full flex flex-col xl:flex-row">
                    <div className="xl:order-3 xl:pl-36">
                        <TecImage />
                    </div>
                    <div className="xl:order-1 xl:ml-52">
                        <TecController />
                    </div>
                    <div className="xl:order-2 xl:w-[30rem]">
                        <TecArticle />
                    </div>
                </div>
            </TEC_PROVIDER>
        </div>
    )
}

export default TecIndex
